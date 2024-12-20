import React from 'react'

const Product = ({params} :{params: {productid: string}}) => {
  return (
    <div>Product {params.productid}</div>
  )
}

export default Product