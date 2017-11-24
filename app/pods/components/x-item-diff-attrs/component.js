import XItemComponent from '../x-item/component';
import layout from '../x-item/template';
import diffAttrs from 'ember-diff-attrs';



export default XItemComponent.extend({
  layout,

  didReceiveAttrs: diffAttrs(
    'one',
    'two',
    'three',
    'four',
    'five',
    function(changedAttrs, ...args) {
      this._super(...args);
      this.set('changedAttrs', changedAttrs && Object.keys(changedAttrs))
    }
  )
});
