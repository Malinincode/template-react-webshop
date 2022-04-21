import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <BrowserRouter>
          <Header /> 
            <Routes>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='/products' element={<Products />}/>
              <Route path='/products/:id' element={<Product />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
background-color: rgb(69,77,88);
`

export default App;
