import React from 'react'
import logo from './../../images/logo.png'
import './login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div>
            <div className='loginpage'>
                <center>
                    <img src={logo} />
                    <div>
                        <h4>Kirish</h4>
                        <input type='text' placeholder='username' className='form-control my-3' />
                        <input type='password' placeholder='password' className='form-control my-3' />
                        <Link class="btn btn-dark form-control my-3" to="/" role="button">Kirish</Link>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Login
