import { SEARCH_BOTS } from './const';

function searchBots(inputValue) {
  return { type: SEARCH_BOTS, inputValue };
}

module.exports = searchBots;
