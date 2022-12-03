import { actionTypes } from "../Context/reducer";
import axios from 'axios';

const fetchAxios = async (method, request) => {
    switch (method) {
        case 'login':
            return axios.post('http://localhost:3001/login', request).then(response => response.data)
        case 'getUserInfo':
            return axios.get('http://localhost:3001/users/me', request).then(response => response.data)
        default:
            throw Error('Request method is undefined!');
    }
}

export const handleTextInput = dispatch => e => {
    dispatch({
        type: actionTypes.TEXT_INPUT,
        payload: {
            key: e.target.name,
            value: e.target.value
        }
    })
}

export const handleFormSubmit = (dispatch, reqbody) => e => {
    e.preventDefault();
    dispatch({type:actionTypes.LOGIN_REQUEST})
    handleFirstRequest('login', reqbody, dispatch)
}

export const handleFirstRequest = (method, body, dispatch) => {
    fetchAxios(method, body)
        .then(({ success, data: token }) => {
            if (success) {
                handleNextRequest('getUserInfo', token , dispatch)
            } else {
                console.log('user not found!');
            }
        })
}

export const handleNextRequest = (method, token, dispatch)=>{
    dispatch({type:actionTypes.LOGIN_REQUEST})
    fetchAxios(method, { headers: { authorization: token } })
    .then(({ success, data }) => {
        if (success) {
            localStorage.setItem('token', token)
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: {
                    user: data,
                    token
                }
            })
        }
    })
}

export const handleLogout = (dispatch) =>{
    localStorage.removeItem("token");
    dispatch({
        type: actionTypes.LOGOUT
    })
}