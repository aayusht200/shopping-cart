export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} className="product-img " />
            <div className="product-info">
                <p className="product-title ">{product.title}</p>
                <p className="product-category">{product.category[0].toUpperCase() + product.category.slice(1)}</p>
                <p className="product-price">${product.price}</p>
                <button
                    onClick={() => onAddToCart(product.id, product.title, product.price, product.image)}
                    className="btn"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}
