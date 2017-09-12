import { PENDING_YOUR_APPROVALFILTER } from './const';

function pendingYourApprovalFilter(status) {
  const originalStatus = 'PENDING_USER_APPROVAL';
  return { type: PENDING_YOUR_APPROVALFILTER, originalStatus };
}

module.exports = pendingYourApprovalFilter;
