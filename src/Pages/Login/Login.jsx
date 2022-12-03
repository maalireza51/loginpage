import React, { useLayoutEffect } from 'react'
import { useAuthDispatch, useAuthState } from '../../Context/auth-context'
import { handleFormSubmit, handleNextRequest, handleTextInput } from '../../Handles/Handles';

export default function Login() {
    const { username, password, token, loading } = useAuthState();
    const dispatch = useAuthDispatch();

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            handleNextRequest('getUserInfo', token, dispatch)
        }
    }, [dispatch])

    return (
        <>
            {loading ? <p>LOADING<span className='spinner'></span></p> :
                <div className="container">
                    <div className="drop">
                        <div className="content">
                            <h2 className='animate__heartBeat'>Drop in</h2>
                            <form action="" onSubmit={handleFormSubmit(dispatch, { username, password })}>
                                <div className="input-box">
                                    <input
                                        value={username}
                                        onChange={handleTextInput(dispatch)}
                                        type="text"
                                        name="username"
                                        placeholder="Username" />
                                </div>
                                <div className="input-box">
                                    <input
                                        value={password}
                                        onChange={handleTextInput(dispatch)}
                                        type="password"
                                        name="password"
                                        placeholder="Password" />
                                </div>
                                <div className="input-box">
                                    <input
                                        type="submit"
                                        value="Login"
                                        href='#' />
                                </div>
                            </form>
                        </div>
                    </div>
                    <a href="http://localhost:3000" className='btn'>Forgot Password</a>
                    <a href="http://localhost:3000" className='btn signup'>Signup</a>
                </div>}
        </>
    )
}
