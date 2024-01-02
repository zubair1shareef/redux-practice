import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, fetchProducts } from '../redux/actions/productActions'
import ProductComponent from './ProductComponent'

function ProductListing() {
  const dispacth = useDispatch()

  useEffect(() => {
    dispacth(fetchProducts())
  }, [])
  
  return (
    <div>
      <ProductComponent />
    </div>

  )
}

export default ProductListing