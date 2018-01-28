import * as Immutable from 'seamless-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import { ActionType } from '../constants/types';

const istate = {
  locationBeforeTransitions: null
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
export function routeReducer(state: any = initialState, action: ActionType<any>) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      });

    default:
      return state;
  }
}
