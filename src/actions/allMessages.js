import { ALL_MESSAGES } from './const';
import moment from 'moment';

function allMessages(message, name, isTemplate) {
  const newMessage = {
    message: message,
    time: moment().format('LT'),
    name: name,
    isTemplate: isTemplate
  }
  return { type: ALL_MESSAGES, newMessage };
}

module.exports = allMessages;
