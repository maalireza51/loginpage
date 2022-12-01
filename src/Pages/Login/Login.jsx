import React from 'react'

export default function Login() {
    return (
        <div className="container">
            <div className="drop">
                <div className="content">
                    <h2 className='animate__heartBeat'>Drop in</h2>
                    <form action="">
                        <div className="input-box">
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="input-box">
                            <input type="submit" value="Login" href='#' />
                        </div>
                    </form>
                </div>
            </div>
            <a href="http://localhost:3000" className='btn'>Forgot Password</a>
            <a href="http://localhost:3000" className='btn signup'>Signup</a>
        </div>
    )
}
