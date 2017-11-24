import { helper } from '@ember/component/helper';

export function times([count, filler = null]/*, hash*/) {
  return Array(count).fill(filler);
}

export default helper(times);
