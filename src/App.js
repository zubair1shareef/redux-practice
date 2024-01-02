import logo from './logo.svg';
import './App.css';
import Test from './components/test'
import Test2 from './components/test2'
import { useState, createContext, useRef } from 'react'
import Context from './context'
import { Route, Routes } from 'react-router-dom';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

import Header from './components2/Header';
import ProductListing from './components2/ProductListing';
import ProductDetails from './components2/ProductDetails';
import Cart from './components2/Cart'



function App() {
  const buttonRef = useRef(null)
  const [dataSet, setdataSet] = useState('fdgdfg ')


  return (
    <Context.Provider value={{ dataSet }}>

      <Header/>
      <Routes>
        {/* <Route path='/' element={<Comp1 />} />
        <Route path='comp2' element={<Comp2 />} /> */}
      
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
      
        <Route path='cart' element={<Cart />} />


      </Routes>


      {/* <Test ref={buttonRef} /> */}

      {/* <button onClick={()=>buttonRef.current.printValue()}> print from parnet</button> */}

    </Context.Provider>
  );
}

export default App;
