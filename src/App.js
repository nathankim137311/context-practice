import './App.css';
import Shop from './Shop';
import Nav from './Nav';
import { CartProvider } from './CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Cart';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <CartProvider>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/shop/products/id:' element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
