import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components';
import { motion } from "framer-motion"
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
                  <H1>{product.title}</H1>
                  <p>Beskrivning: {product.description}</p>
                  <h4>Lagerstatus: {product.storage} stk i lager</h4>
                  <h2>Pris: {product.price} SEK</h2>
            </article>
      </Text>
            <motion.div
            initial={{x: 70 }}
            animate={{x: 0}}
            transition={{duration: 1}}
            >
            { <Img src={product.url}></Img> }
            </motion.div>
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
width: 1200px;
`
const Text = styled.article`
display: flex;
align-self: flex-start;
margin-top: 80px;
margin-left: 40px;
width: 300px;
font-family: 'Trebuchet MS';
font-size: 18px;
`

const H1 = styled.article`
font-size: 25px;
`


const Img = styled.img `
display: flex; 
width: 650px;
height: auto;
margin-left: 50px;
margin-top: 70px;
` 

export default Product