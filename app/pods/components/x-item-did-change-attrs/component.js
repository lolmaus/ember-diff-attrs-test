import XItemComponent from '../x-item/component';
import layout from '../x-item/template';
import DidChangeAttrsMixin from 'ember-did-change-attrs'

export default XItemComponent.extend(DidChangeAttrsMixin, {
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
  didChangeAttrs (changedAttrs) {
    this.set('changedAttrs', changedAttrs && Object.keys(changedAttrs))
  }
});
