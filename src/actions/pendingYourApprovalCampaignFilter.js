import { PENDING_YOUR_APPROVAL_CAMPAIGN_FILTER } from './const';

function pendingYourApprovalCampaignFilter(status) {
  const originalStatus = 'PENDING_USER_APPROVAL';
  return { type: PENDING_YOUR_APPROVAL_CAMPAIGN_FILTER, originalStatus };
}

module.exports = pendingYourApprovalCampaignFilter;
