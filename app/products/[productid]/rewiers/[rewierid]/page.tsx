import React from 'react'
import { notFound } from 'next/navigation';
const Rewier = ({params}: {
  params: {
    productid: string;
    rewierid: string
}}) => {
  if (parseInt(params.rewierid) > 100) {
    notFound(); // Прекращаем выполнение, если параметров слишком много
    return null; // Возвращаем null, чтобы избежать ошибок рендеринга
  }
  return (
    <div>Product {params.productid} rewier {params.rewierid}</div>
  )
}

export default Rewier