import React from 'react'
import  { Metadata } from 'next'


export const generateMetadata = ({params}: Params): Metadata => {
   return {
    title: `Products ${params.productid}`
   }
}
type Params = {
  params: {
    productid: string
  }
}

const Product = ({params} :Params): React.ReactNode => {
  return (
    <div>Product {params.productid}</div>
  )
}

export default Product