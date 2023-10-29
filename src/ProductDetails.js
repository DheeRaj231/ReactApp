import React, { Component } from 'react';
import { useLocation } from 'react-router-dom'; //in reciving component we always use useLocation fun
import "./App.css"

function ProductDetails(){
    const data=useLocation();
   
        return (
            <div className='prodCart'> 
                <h1>Product Details</h1>
                <p>Title is {data.state.title}</p>
                <img src={data.state.image} width={200} height={200}/>
            </div>
        )
    
}

export default ProductDetails;



