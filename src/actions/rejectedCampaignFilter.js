import { REJECTED_CAMPAIGN_FILTER } from './const';

function rejectedCampaignFilter(status) {
  return { type: REJECTED_CAMPAIGN_FILTER, status };
}

module.exports = rejectedCampaignFilter;
