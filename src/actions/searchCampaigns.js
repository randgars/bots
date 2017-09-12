import { SEARCH_CAMPAIGNS } from './const';

function searchCampaigns(inputValue) {
  return { type: SEARCH_CAMPAIGNS, inputValue };
}

module.exports = searchCampaigns;
