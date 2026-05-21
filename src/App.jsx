import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router';
import NotFound from './pages/NotFound';
function App() {
    const [cart, updateCart] = useState(new Map());
    const [total, updateSubTotal] = useState(0);
    function handleAdd(id, name, price, image) {
        const cartData = new Map(cart);
        const currData = cartData.get(id);
        if (cartData.has(id)) {
            cartData.set(id, {
                ...currData,
                qty: currData.qty + 1,
            });
        } else {
            cartData.set(id, { name, qty: 1, price, image });
        }
        updateCart(cartData);
        updateSubTotal(total + price);
    }
    function handleRemove(id, price) {
        const cartData = new Map(cart);
        const currData = cartData.get(id);
        if (currData.qty > 1) {
            cartData.set(id, {
                ...currData,
                qty: currData.qty - 1,
            });
        } else {
            cartData.delete(id);
        }
        updateCart(cartData);
        updateSubTotal(total - currData.price);
    }
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar data={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop handleAdd={handleAdd} />} />

                    <Route
                        path="/cart"
                        element={<Cart cart={cart} handleAdd={handleAdd} handleRemove={handleRemove} total={total} />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
