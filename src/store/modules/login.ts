import {Module, MutationTree, ActionTree} from 'vuex'
import {RootState, LoginState} from '../types'

import axios, {AxiosResponse, AxiosError} from 'axios'
import {ROOT_URL} from '../../utils/constants'


export const initialState = {
    isLogin: false,
    isFetching: false,
    user: {},
    loginError: {}
}

export const mutations: MutationTree<LoginState> = {
    loginRequest (state) {
        state = {...initialState, isFetching: true}
    },
    loginSuccess (state, payload) {
        state = {...initialState, user: payload, isLogin: true, isFetching: false}
    },
    loginError (state, error) {
        state = {...initialState, loginError: error, isFetching: false} 
    }
}

export const actions: ActionTree<LoginState, RootState> = {
    login ({commit}) {
        commit('loginRequest')

        axios.get(ROOT_URL)
        .then((response: AxiosResponse) => {
            commit('loginSuccess', response)
        })
        .catch((error: AxiosError) => {
            commit('loginError', error)
        })
    }
}

export const loginModule: Module<LoginState, RootState> = {
    state: initialState,
    mutations,
    actions,
}