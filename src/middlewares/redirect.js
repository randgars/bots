import { browserHistory } from 'react-router';
import {
  ROUTING
} from '../actions/const';

export const redirect = store => next => action => {
  if (action.type === ROUTING) {
    browserHistory[action.payload.method](action.payload.nextUrl)
  }

  return next(action)
}