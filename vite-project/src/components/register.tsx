import {useState, useEffect} from 'react'
import useForm from './useForm';


function Register(){
  

    }
    return(
        <div className="container">
            <form>
                <h1>Register</h1>
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email" id="email" name='email' required placeholder="Enter Your Email:"/>
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password" name='password' required placeholder="Enter Your Password:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password2" name='password2' required placeholder="Confirm Your Password:" />
                </div>
                <button type="submit" value="Submit">Register</button>
                <h2>Are you already a member ? <a href="">Sign In</a> </h2>




            </form>













        </div>
    )
}

export default Register