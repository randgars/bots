/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import addBot from '../reducers/addBot.js';
import addCampaign from '../reducers/addCampaign.js';
import chat from '../reducers/chat.js';
import userLogIn from '../reducers/userLogIn.js';
import campaignList from '../reducers/campaignList.js';
import bot from '../reducers/bot.js';
import botList from '../reducers/botList.js';
import userRegistration from '../reducers/userRegistration.js';
import campaign from '../reducers/campaign.js';
import botsAndCampaignsDialogActions from '../reducers/botsAndCampaignsDialogActions.js';
import { reducer as formReducer } from 'redux-form';
const reducers = {
  botList,
  bot,
  campaignList,
  userLogIn,
  chat,
  form: formReducer,
  addBot,
  userRegistration,
  addCampaign,
  campaign,
  botsAndCampaignsDialogActions
};
const combined = combineReducers(reducers);
module.exports = combined;
