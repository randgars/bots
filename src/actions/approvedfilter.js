import { APPROVEDFILTER } from './const';

function approvedBotFilter(status) {
  return { type: APPROVEDFILTER, status };
}

module.exports = approvedBotFilter;
