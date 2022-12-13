import './App.css';
import Home from './Home/Home'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Menu from './menu/Menu';
import Cart from './cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/menu" element={<Menu />} />
        <Route path ="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
