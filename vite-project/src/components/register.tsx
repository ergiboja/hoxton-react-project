import React from 'react';
import { useForm, Resolver } from 'react-hook-form';
import {useState, useEffect} from 'react'
import "./register.css"


function Register(){
    const {register, handleSubmit, watch, formState:{errors} }= useForm()
    const onSubmit = data => console.log(data);
  

   
    return (
        <div className="container">
            <form id='form' className='registerForm' onSubmit={handleSubmit(onSubmit)}>
                
                <h1>Register</h1>
               
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email" id="email"  
                     {...register("email")} required placeholder="Enter Your Email:"/>
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password" 
                    {...register("password")} required placeholder="Enter Your Password:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password2" 
                    {...register("password2")} required placeholder="Confirm Your Password:" />
                </div>
                <button type="submit" value="Submit">Register</button>
                <h2>Are you already a member ? <a href="">Sign In</a> </h2>




            </form>













        </div>
    )

}

export default Register