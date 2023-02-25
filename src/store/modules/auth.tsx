//액션
const LOGIN = 'auth/LOGIN' as const;
const LOGOUT = 'auth/LOGOUT' as const;

//액션 생성 정의
export const logIn = (displayName: string) => ({ type: LOGIN, payload: displayName });
export const logOut = (displayName: string) => ({ type: LOGOUT, payload: displayName });
type AuthAction = ReturnType<typeof logIn> | ReturnType<typeof logOut>;

//초기상태
type USERSTATE = {
  displayName: string;
};

const initialState: USERSTATE = {
  displayName: '',
};

//리듀서
export default function authReducer(state: USERSTATE = initialState, action: AuthAction) {
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
}
