import  {
  RECEIVE_GAMES,
  RECEIVE_ONE_GAME
} from '../actions/games';
import {
  RECEIVE_ONE_COLLECTION,
  RECEIVE_COLLECTIONS,
  REMOVE_GAME_COLLECTION,
} from '../actions/collections';
import {
  RECEIVE_ONE_REVIEW,
  RECEIVE_REVIEWS
} from '../actions/reviews';
import {
  RECEIVE_STREAMS,
} from '../actions/twitch';
import { merge } from 'lodash';

export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_ONE_GAME:
    newState = merge({}, state, action.games);
    return newState;
    case RECEIVE_GAMES:
      newState = merge({}, state, action.games);
      return newState;
    case RECEIVE_ONE_COLLECTION:
      newState = merge({}, state, action.games);
      return newState;
    case RECEIVE_COLLECTIONS:
      newState = merge({}, state, action.games);
      return newState;
    case RECEIVE_REVIEWS:
      newState = merge({}, state, action.games);
      return newState;
    case RECEIVE_ONE_REVIEW:
      newState = merge({}, state);
      if (newState[action.gameId] && newState[action.gameId].reviews) {
        if (!newState[action.gameId].reviews.includes(action.review.id)) {
          newState[action.gameId].reviews.push(action.review.id);
          newState[action.gameId].review = action.review;
        }
      }
      return newState;
    case RECEIVE_STREAMS:
      newState = merge({}, state);
      if (action.streams) {
        newState[action.gameId].streams = action.streams.map(stream => stream._id);
      }
      return newState;
    case REMOVE_GAME_COLLECTION:
      newState = merge({}, state);
      if (action.removeReviewId) {
        let index = newState[action.gameId].indexOf;
        newState[action.gameId].reviews.splice(index, 1);
      }
      return newState;

    default:
      return state;
  }
};
