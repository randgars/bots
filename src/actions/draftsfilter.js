import { DRAFTSFILTER } from './const';

function draftsFilter(status) {
  const originalStatus = 'DRAFT';
  return { type: DRAFTSFILTER, originalStatus };
}

module.exports = draftsFilter;
