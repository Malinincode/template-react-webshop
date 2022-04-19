import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import Products from './pages/Products';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
