import { PENDING_ADMIN_APPROVAL_CAMPAIGN_FILTER } from './const';

function pendingAdminApprovalCampaignFilter(status) {
  const originalStatus = 'PENDING_APPROVAL';
  return { type: PENDING_ADMIN_APPROVAL_CAMPAIGN_FILTER, originalStatus };
}

module.exports = pendingAdminApprovalCampaignFilter;
