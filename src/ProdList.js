import React, {useState,useEffect} from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";  // in sending comp we always use useNavigate to send data

function ProdList(){

    // state, management in react
    // useState

    const [products, setProducts]=useState([]);

    const navigateTo = useNavigate(()=>{
           loadProducts();
    },[]);

    useEffect(()=>{loadProducts();
    },[]);

    function loadProducts()
    {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
                   if(res.status===200) {
                    console.log(res.data);
                    setProducts(res.data);
                   }


        })
        .catch((err)=>
        {
            console.log(err);

        });

    }
    function SendData(prodData){
        navigateTo("/getProduct",{state:prodData})
    }
    return(
        <div>
            
                <div className="MainWrapper">
                {
                products.map((ele)=>{
                    return(
                        <div className="productCart">
                            <img src={ele.image} width={150} height={150} alt=""></img>
                            <p>Title is  : {ele.title}</p>
                            <p>price  : {ele.price}</p>  
                            {/* <p>description  : {ele.description}</p> */}
                            {/* <p>ratings  : {ele.rating.rate}</p> */}
                            {/* <p>reviewed  : {ele.rating.count}</p> */}
                            <button className="BuyNow" onClick={()=>{
                                SendData(ele);
                            }
                            }>more</button>
                        </div>

                    )

                })
            }
                </div>

        </div>
    )
}

export default ProdList;