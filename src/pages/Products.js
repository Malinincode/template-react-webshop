/* import React, {useState, useEffect} from 'react'

function Products() {
  const [products, setProducts] = useState([]);

  useEffect( async () =>{
    try {
      const response = await fetch('https://codexplained.se/cars.php');
      const data = await response.json();
      console.log(data);

      setProducts(data);
    } catch (error) {
    console.log(error);
    }
    }, [])


  return (
    <div> {
      products.map((product) => 
      (
    <article key={product.id}>
      <h1>{product.title}</h1>
      <img src={product.url}></img>
      <p>{product.description}</p>
      <h4>{product.price}</h4>

    </article>
      ))
      }
      
</div>
  )
}

export default Products */

import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
import Product from './Product';

//"Home"-page

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
      
        <h1>Products</h1>
        {
          products.map((product) => 
               (
                <ProductItem product={product} key={product.id}/>
              )
          )
        }

    </div>
  )
}

export default Products