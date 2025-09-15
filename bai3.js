import React, { useState } from 'react';
function Product({ product, addToCart }) {
  return (
    <div>
      <span>{product.name} - {product.price}đ</span>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}
function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);  
  return (
    <div>
      <h3>Giỏ hàng</h3>
      {cartItems.length === 0 ? <p>Giỏ hàng trống</p> : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - {item.price}đ</li>
          ))}
        </ul>
      )}
      <h4>Tổng tiền: {total}đ</h4>
    </div>
  );
}
function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { name: 'Sách', price: 100000 },
    { name: 'Bút', price: 50000 },
    { name: 'Vở', price: 70000 }
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <h1>Giỏ hàng</h1>
      <div>
        <h2>Sản phẩm</h2>
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cart} />
    </div>
  );
}
export default App;