import { LOGIN, LOGOUT, authProps } from './types';
import { AuthActionType } from './actions';

export const initialState: authProps = {
  displayName: '',
};

export const authReducer = (state: authProps = initialState, action: AuthActionType) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        displayName: action.payload,
      };
    default:
      return state;
  }
};
