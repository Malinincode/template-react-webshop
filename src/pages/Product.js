import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components';
import Nav from '../components/Nav';




function Product() {
  const params = useParams();
  console.log(params)
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
  try {
    const response = await fetch('https://codexplained.se/cars.php?id=' + params.id);
    const data = await response.json();
    console.log(data)
    
    setProduct(data);
  } catch (error) {
    console.log (error)
  }

}
  useEffect( () => {
    fetchProduct();
  },[])

 

  return (
    <div>
    <Nav />
    <SingleProductParent>
      <Text>
            <article>
                  <h1>{product.title}</h1>
                  <p>Beskrivning: {product.description}</p>
                  <h3>Lagerstatus: {product.storage} stk i lager</h3>
                  <h2>Pris: {product.price} SEK</h2>
            </article>
      </Text>
            <div>
            { <Img src={product.url}></Img> }
            </div>
    </SingleProductParent>
  </div>

 
  )
}

const SingleProductParent = styled.article`
display: flex;
justify-content: center;
border: 2px grey solid;
margin: 50px 200px;  
background-color: white;
height: 500px;
width: 1300px;

`
const Text = styled.article`
display: flex;
align-self: flex-start;

margin-top: 100px;
width: 300px;
`

const Img = styled.img `
 display: flex; 
width: 720px;
height: auto;
margin-left: 100px;
` 

export default Product