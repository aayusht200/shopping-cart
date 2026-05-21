import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Home from './pages/Home';
function App() {
    const [cart, updateCart] = useState(new Map());
    function handleAdd(id) {
        const cartData = new Map(cart);

        if (cartData.has(id)) {
            cartData.set(id, cartData.get(id) + 1);
        } else {
            cartData.set(id, 1);
        }
        updateCart(cartData);
    }
    return (
        <div className="app p-10">
            <Navbar />
            <Home />
            <Shop handleAdd={handleAdd} />
        </div>
    );
}

export default App;
