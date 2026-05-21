const header = ['Product', 'Title', 'Price Per Qty.', 'Quantity', 'Subtotal'];
export default function Cart({ cart, handleAdd, handleRemove, updateTotal, total }) {
    if (cart.size < 1) return <>Cart Is Empty!</>;
    return (
        <div className="cart">
            <div className="cart-header">
                {header.map((curr) => {
                    return (
                        <div className={`cart-${curr}`} key={curr}>
                            {curr}
                        </div>
                    );
                })}
            </div>
            <div className="product-details">
                {[...cart].map((curr) => (
                    <ProductDetails
                        key={curr[0]}
                        data={curr[1]}
                        addQty={handleAdd}
                        removeQty={handleRemove}
                        id={curr[0]}
                    />
                ))}
            </div>
            <div className="checkout">
                Total: <div className="total">${total.toFixed(2)}</div>
            </div>
        </div>
    );
}

function ProductDetails({ data, addQty, removeQty, updateTotal, id }) {
    return (
        <div className="cart-details">
            <img src={data.image} alt={data.name} className="cart-img " />
            <div className="cart-title">{data.name}</div>
            <div className="price">${data.price}</div>
            <div className="cart-qty">
                {data.qty}
                <div className="update-qty">
                    <button className="add-qty" onClick={() => removeQty(id, data.price)}>
                        -
                    </button>
                    <button className="add-qty" onClick={() => addQty(id, data.name, data.price, data.image)}>
                        +
                    </button>
                </div>
            </div>
            <div className="total-price">${(data.qty * data.price).toFixed(2)}</div>
        </div>
    );
}
