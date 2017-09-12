/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import resendActivationLink from '../actions/resendActivationLink.js';
import postActivateToken from '../actions/postActivateToken.js';
import registration from '../actions/registration.js';
import saveBot from '../actions/saveBot.js';
import logout from '../actions/logout.js';
import allMessages from '../actions/allMessages.js';
import routing from '../actions/routing.js';
import login from '../actions/login.js';
import pendingYourApprovalCampaignFilter from '../actions/pendingYourApprovalCampaignFilter.js';
import pendingAdminApprovalCampaignFilter from '../actions/pendingAdminApprovalCampaignFilter.js';
import draftsCampaignFilter from '../actions/draftsCampaignFilter.js';
import rejectedCampaignFilter from '../actions/rejectedCampaignFilter.js';
import approvedCampaignFilter from '../actions/approvedCampaignFilter.js';
import allCampaignFilter from '../actions/allCampaignFilter.js';
import searchCampaigns from '../actions/searchCampaigns.js';
import setCampaigns from '../actions/setCampaigns.js';
import rejectedfilter from '../actions/rejectedfilter.js';
import draftsfilter from '../actions/draftsfilter.js';
import pendingAdminApprovalfilter from '../actions/pendingAdminApprovalfilter.js';
import pendingYourApprovalfilter from '../actions/pendingYourApprovalfilter.js';
import approvedfilter from '../actions/approvedfilter.js';
import allBotfilter from '../actions/allBotfilter.js';
import setBotInfo from '../actions/setBotInfo.js';
import searchBots from '../actions/searchBots.js';
import setBots from '../actions/setBots.js';
import saveCampaign from '../actions/saveCampaign.js';
import setCampaignInfo from '../actions/setCampaignInfo.js';
import removeBotFromCampaign from '../actions/removeBotFromCampaign.js';
import addBotsToCampaign from '../actions/addBotsToCampaign.js';
import getBotAddData from '../actions/getBotAddData.js';
import saveAsDraft from '../actions/saveAsDraft.js';
import restore from '../actions/restore.js';
import publishBot from '../actions/publishBot.js';
const actions = {
  setBots,
  searchBots,
  setBotInfo,
  allBotfilter,
  approvedfilter,
  pendingYourApprovalfilter,
  pendingAdminApprovalfilter,
  draftsfilter,
  rejectedfilter,
  setCampaigns,
  searchCampaigns,
  allCampaignFilter,
  approvedCampaignFilter,
  rejectedCampaignFilter,
  draftsCampaignFilter,
  pendingAdminApprovalCampaignFilter,
  pendingYourApprovalCampaignFilter,
  login,
  routing,
  allMessages,
  logout,
  saveBot,
  registration,
  postActivateToken,
  resendActivationLink,
  saveCampaign,
  setCampaignInfo,
  removeBotFromCampaign,
  addBotsToCampaign,
  getBotAddData,
  saveAsDraft,
  restore,
  publishBot
};
module.exports = actions;
