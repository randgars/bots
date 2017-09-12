import { ROUTING } from './const';

function action(parameter) {
  return { type: ROUTING, parameter };
}

module.exports = action;
