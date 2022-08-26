import React from 'react';
import { useForm, Resolver } from 'react-hook-form';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./register.css"


function Register(){
    const {register, handleSubmit, }= useForm()
    const [errors, setErrors]=useState();
    const [alert ,setAlert]=useState();
    const [toggle ,setToggle]=useState(false);
    // const onSubmit = data => console.log(data.password2);
    const onSubmit = data =>{ 
        localStorage.setItem('Email', JSON.stringify(data.email));
        localStorage.setItem('Password', JSON.stringify(data.password));
        localStorage.setItem('Password2', JSON.stringify(data.password2));
        let psw = data.password 
        let psw2= data.password2 

        
        if(psw===psw2){
            setAlert("Registration Completed! Sign in ");
            
            setToggle(true)
          
            
            

        }else{
            setErrors("Passwords Dont Match");
       
            
        }

    
    
    };
   
   
   

   
    return (
        <section className='registersec'>
        <div className="container">
            <form id='form' className='registerForm' onSubmit={handleSubmit(onSubmit)}>
                
                <h1>Register</h1>
               
                <div className="input-field">
                    <i className="uil uil-envelope icon"></i><input type="email" id="email"  
                     {...register("email")} required placeholder="Enter Your Email:"/>
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password" minLength={4}
                    {...register("password")} required placeholder="Enter Your Password:" />
                </div>
                <div className="input-field">
                    <i className="uil uil-lock icon"></i><input type="password" id="password2" minLength={4}
                    {...register("password2")} required placeholder="Confirm Your Password:" />
                    <p className='error'>{errors}</p>
                </div>
                <button type="submit" value="Submit" disabled={toggle} >Register</button>
                <p>{alert}</p>
                <h2>Are you already a member ? <Link to="/">Sign In</Link> </h2>




            </form>













        </div>
        </section>
    )

}

export default Register