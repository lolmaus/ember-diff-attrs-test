import Component from '@ember/component';
import { reads } from '@ember/object/computed';



export default Component.extend({

  // ----- Arguments -----
  one: null,
  two: null,
  three: null,
  four: null,
  five: null,
  six: null,
  seven: null,
  eight: null,
  nine: null,
  ten: null,



  // ----- Computed properties -----
  oneR: reads('one'),
  twoR: reads('two'),
  threeR: reads('three'),
  fourR: reads('four'),
  fiveR: reads('five'),
  sixR: reads('six'),
  sevenR: reads('seven'),
  eightR: reads('eight'),
  nineR: reads('nine'),
  tenR: reads('ten'),



  // ----- Actions -----
  actions: {
    mutate () {
      this.setProperties({
        one: this.get('oneR'),
        two: this.get('twoR'),
        three: this.get('threeR'),
        four: this.get('fourR'),
        five: this.get('fiveR'),
        six: this.get('sixR'),
        seven: this.get('sevenR'),
        eight: this.get('eightR'),
        nine: this.get('nineR'),
        ten: this.get('tenR'),
      })
    }
  }
});
