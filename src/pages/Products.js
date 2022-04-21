import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
import styled from 'styled-components';
import Product from './Product';


function Products() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://codexplained.se/cars.php');
      const data = await response.json();
      console.log(data)
      
      setProducts(data);
    } catch (error) {
      console.log (error)
    }
  }
    useEffect( () => {
      fetchProducts();
    },[])

    return (
      <div>
          <H1>Modeller</H1>
      <ContainerParent>  
          {
            products.map((product) => 
                 (
                  <ProductItem product={product} key={product.id}/>
                ))
          }
      </ContainerParent>
      </div>
    )
  }
  
const ContainerParent = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
border: solid 4px black;
font-family: 'Trebuchet MS';
`
const H1 = styled.h1`
color: goldenrod;
font-family: 'Trebuchet MS';
`


export default Products



