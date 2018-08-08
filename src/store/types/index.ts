export interface RootState {
    login: LoginState,
}

export interface LoginState {
    isFetching: boolean,
    isLogin: boolean,
    loginError: object,
    user: object,
}