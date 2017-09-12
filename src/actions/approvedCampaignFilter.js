import { APPROVED_CAMPAIGN_FILTER } from './const';

function approvedCampaignFilter(status) {
  return { type: APPROVED_CAMPAIGN_FILTER, status };
}

module.exports = approvedCampaignFilter;
