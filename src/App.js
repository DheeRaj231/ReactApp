// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Component from './Component';
import Login from './Login';
// import Button from './Button';
// import CustomText from './CustomText';
import ProdList from './ProdList';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProductDetails from './ProductDetails';


function App() {
  
  return (
    
    <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login></Login>}/>
            <Route path='/products' element={<ProdList></ProdList>}/>
            <Route path='*' element={<h1>Fuck Off😡🤬, Dont Be DumbFk </h1>}/>
            <Route path='/getProduct' element={<ProductDetails></ProductDetails>} />
          </Routes>
          </BrowserRouter>

{/*     
      <Login></Login>
    <Button btntxt="Sign Up"/>
    <CustomText placetxt="enter name"></CustomText>
      <Component></Component>
    <ProdList></ProdList> */}
    </div>
  );
}

export default App;
