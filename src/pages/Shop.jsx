import { getProducts } from '../api/products.js';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
export default function Shop({ handleAdd }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function loadData() {
            try {
                const response = await getProducts();
                setProducts(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);
    console.log(products[1]);
    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;
    return (
        <div className="product-grid">
            {products.map((curr) => {
                return <ProductCard product={curr} key={curr.id} onAddToCart={handleAdd} />;
            })}
        </div>
    );
}
