import { REJECTEDFILTER } from './const';

function rejectedFilter(status) {
  return { type: REJECTEDFILTER, status };
}

module.exports = rejectedFilter;
