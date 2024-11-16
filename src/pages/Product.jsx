import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import products from '../components/data';

const Product = ({ category }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();

  // Filter products based on the category received as a prop
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const [quantities, setQuantities] = useState(
    filteredProducts.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleQuantityChange = (id, value) => {
    const newQuantity = Math.max(1, value); // Ensure minimum quantity is 1
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));

    if (isInCart(id)) {
      const product = filteredProducts.find((p) => p.id === id);
      const averagePrice =
        (product.numericPrice[0] + product.numericPrice[1]) / 2;
      addToCart({
        ...product,
        quantity: newQuantity,
        price: averagePrice.toFixed(2),
      });
    }
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">{category ? `${category} ` : 'All '}Products</h1>
      <div className="product-slider">
        <div className="slider">
          {filteredProducts.map((product) => (
            <div className="slide-box" key={product.id}>
              <img src={product.imgSrc} alt={product.name} />
              <h1>{product.name}</h1>
              <div className="price">{product.price}</div>
              <div className="quantity-control">
                <button
                  onClick={() =>
                    handleQuantityChange(product.id, quantities[product.id] - 1)
                  }
                  disabled={quantities[product.id] <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantities[product.id]}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value))
                  }
                  min="1"
                />
                <button
                  onClick={() =>
                    handleQuantityChange(product.id, quantities[product.id] + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  const averagePrice =
                    (product.numericPrice[0] + product.numericPrice[1]) / 2;
                  isInCart(product.id)
                    ? removeFromCart(product.id)
                    : addToCart({
                        ...product,
                        quantity: quantities[product.id],
                        price: averagePrice.toFixed(2),
                      });
                }}
                className="btn"
              >
                {isInCart(product.id) ? 'Remove from cart' : 'Add to cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
