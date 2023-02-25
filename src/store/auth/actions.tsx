import { LOGIN, LOGOUT } from './types';

export const logIn = (displayName: string) => ({ type: LOGIN, payload: displayName });
export const logOut = (displayName: string) => ({ type: LOGOUT, payload: displayName });
export type AuthActionType = ReturnType<typeof logIn> | ReturnType<typeof logOut>;
