import "./home.css";
import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import {useEffect, useState} from 'react'

function Home() {
    
    const [product, setProduct] = useState<any[]>([]
                
        );
        useEffect(() => {
    
            fetch('http://localhost:4001/products')
    
                .then(response => {
                    return response.json()
                })
    
                .then(data => {
                   
                    setProduct(data);
    
                     
    
                })
                
        },[])
    
    
        console.log(product)
    
    
   
    return (
   
    
        
        
        
        
        
                <section className="products-container ">
                    <ul className="products-container__list">
                    {product.map((producti,i) =>  
        
                        <li id={producti.id} onClick={()=>{
                            console.log("clicked")
                        }}>
                            <a href="#" >
                                <article className="product-card">
                                    <img
                                        src={producti.image}
                                       
                                    />
                                    <h3 >{producti.title}</h3>
                                </article>
                                </a>
                        </li>
        )
        }
        
                
        
        
                    </ul>
                </section>
        
         

    )
}
export default Home 
