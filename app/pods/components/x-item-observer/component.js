import XItemComponent from '../x-item/component';
import layout from '../x-item/template';
import { computed, observer } from '@ember/object'


// Credit: Alex Kanunnikov @lifeart https://github.com/lifeart

export default XItemComponent.extend({
  layout,

  didChangeAttrsConfig: {
    attrs: [
      'one',
      'two',
      'three',
      'four',
      'five',
    ],
  },

  didChangeAttrs() {
      this.set('changedAttrs', Object.keys(this.get('lastChangedAttrs')))
  },

  lastChangedAttrs: null,

  init() {
      this.resetLastChangedAttrs();
      this.initObservers();
      this._super(...arguments);
  },
  createObserverFor(propertyName) {
      return function (target, key) {
          this.addChangedAttribute(propertyName);
      }.bind(this);
  },
  initObservers() {
      (this.get('didChangeAttrsConfig.attrs') || []).forEach((attrName) => {
          let observerName = `${attrName}@observer`;
          this[observerName] = this.createObserverFor(attrName);
          this.addObserver(attrName, this, observerName);
      });
  },
  didUpdateAttrs() {
      this.didChangeAttrs(this.lastChangedAttrs);
      this.resetLastChangedAttrs();
      this._super(...arguments);
  },
  addChangedAttribute(name) {
      this.lastChangedAttrs[name] = this.get(name);
  },
  resetLastChangedAttrs() {
      this.set('lastChangedAttrs', {});
  }
});
