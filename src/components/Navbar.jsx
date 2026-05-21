import { Link } from 'react-router-dom';
export default function Navbar({ data }) {
    const cartCount = [...data].reduce((accumulator, [, item]) => {
        return accumulator + item.qty;
    }, 0);
    return (
        <div className="navbar">
            <Link to="/" className="nav-left">
                <img src="/favicon.ico" alt="site-logo" />
                <h1 className="site-title">Generic Shopping Cart App</h1>
            </Link>
            <div className="nav-right">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/shop" className="nav-link">
                    Products
                </Link>
                <Link to="/cart" className="nav-link cart">
                    Cart <span className="cart-count">{cartCount}</span>
                </Link>
            </div>
        </div>
    );
}
