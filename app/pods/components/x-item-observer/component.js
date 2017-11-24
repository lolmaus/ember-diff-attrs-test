import XItemComponent from '../x-item/component';
import layout from '../x-item/template';
import DidChangeAttrsMixin from 'ember-did-change-attrs'
import { computed, observer } from '@ember/object'

export default XItemComponent.extend(DidChangeAttrsMixin, {
  layout,

});
