import { SET_BOT_INFO } from './const';

function setBotInfo(infoObj) {
  debugger
  const item = infoObj.item;
  return { type: SET_BOT_INFO, item };
}

module.exports = setBotInfo;
