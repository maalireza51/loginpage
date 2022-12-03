import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const AuthStateContext = createContext();
const AuthDispatcherContext = createContext();

export function useAuthState() {
    const context = useContext(AuthStateContext)

    if(!context){
        throw Error('useAuthState must be used with a AuthProvider')
    }

    return context;
}

export function useAuthDispatch() {
    const dispatch = useContext(AuthDispatcherContext)

    if(!dispatch){
        throw Error('useAuthDispatcher must be used with a AuthProvider')
    }

    return dispatch;
}

export function AuthProvider({ children }){
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AuthStateContext.Provider value={state}>
            <AuthDispatcherContext.Provider value={dispatch}>
                {children}
            </AuthDispatcherContext.Provider>
        </AuthStateContext.Provider>
    )
}