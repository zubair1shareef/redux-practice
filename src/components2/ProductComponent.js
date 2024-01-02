import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/productActions'

function ProductComponent() {
    const dispacth = useDispatch()
    function AddtoCart(data) {
        let k = data

        dispacth(addToCart(data))
    }

    const RenderData = () => {
        const allProduct = useSelector(state => state.allProduct.products)

        const renderedData = allProduct.map((data) => {
            return (

                <div class="card" style={{ width: "100px",margin:"10px" }}>
                    <img class="card-img-top" src={data.image} alt="Card image" style={{ width: "100px" }} />
                    <div class="card-body">
                        <h4 class="card-title">{data.title}</h4>
                        {/* <p class="card-text">{data.description}</p> */}
                        <h4 class="card-title">{data.price}</h4>
                        {/* <a href="#" class="btn btn-primary" onClick={() => AddtoCart(data)}> <button onClick={() => AddtoCart(data)}>Add</button></a> */}
                        <button class="btn btn-primary" onClick={() => AddtoCart(data)}>Add</button>
                    </div>
                </div>

            )

        })
        console.log(renderedData)
        return renderedData
    }
    return (
        <div>
            <div class="container">
                <div class="row row-cols-4">
                {<RenderData />}
            </div>
         </div>
        </div>


    )
}

export default ProductComponent