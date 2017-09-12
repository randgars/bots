import { PENDING_ADMIN_APPROVALFILTER } from './const';

function pendingAdminApprovalFilter(status) {
  const originalStatus = 'PENDING_APPROVAL';
  return { type: PENDING_ADMIN_APPROVALFILTER, originalStatus };
}

module.exports = pendingAdminApprovalFilter;
