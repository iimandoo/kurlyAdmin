export const LOGIN = 'auth/LOGIN' as const;
export const LOGOUT = 'auth/LOGOUT' as const;

export type authProps = {
  displayName: string;
};
