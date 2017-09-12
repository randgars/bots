import { DRAFTS_CAMPAIGN_FILTER } from './const';

function draftsCampaignFilter(status) {
  const originalStatus = 'DRAFT';
  return { type: DRAFTS_CAMPAIGN_FILTER, originalStatus };
}

module.exports = draftsCampaignFilter;
