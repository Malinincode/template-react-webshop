import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


function ProductItem({product}) {
  return (

    <ProductOverview>
        <Link to={`/products/${product.id}`}>
          <h1>{product.title}</h1>
        </Link>
          <Img src={product.url}></Img>
          <h3>Pris {product.price} SEK</h3>
    </ProductOverview>
  
      )
}

const ProductOverview = styled.article`
display: flex;
flex-direction: column;
border: 2px grey solid; 
/*  padding: 60px 20px;  */
margin: 40px; 
background-color: white;
`

const Img = styled.img `
padding: 40px 0px;
max-width: 400px;
max-height: 300px;
`

export default ProductItem