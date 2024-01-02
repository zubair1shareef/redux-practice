import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveFromCart } from '../redux/actions/productActions'

function Cart() {
  const cart = useSelector(state => state.cart)
  const dispacth = useDispatch()

  function DeletCart(data) {
    dispacth(RemoveFromCart(data))
  }

  const RenderCart = () => {
    console.log(cart)
    if (cart.length == 0) {
      return <h1>No Data</h1>
    }
    return cart.map((data) => {
      return (
        <>
          <div class="card" style={{ width: "100px", margin: "10px" }}>
            <img class="card-img-top" src={data.image} alt="Card image" style={{ width: "100px" }} />
            <div class="card-body">
              <h4 class="card-title">{data.title}</h4>
              {/* <p class="card-text">{data.description}</p> */}
              <h4 class="card-title">{data.price}</h4>
              {/* <a href="#" class="btn btn-primary" onClick={() => AddtoCart(data)}> <button onClick={() => AddtoCart(data)}>Add</button></a> */}
              <button class="btn btn-primary" onClick={() => DeletCart(data)}>Remove</button>
            </div>
          </div>
        </>
      )
    })
  }
  return (
    <div>
      <div class="container">
        <div class="row row-cols-4">
          {<RenderCart />}
        </div>
      </div>
    </div>
  )
}

export default Cart