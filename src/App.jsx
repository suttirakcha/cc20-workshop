import { useEffect, useState } from "react";
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Cart => { id, price, title, quantity }

  const fetchProducts = () => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const addToCart = (id, title, price) => {
    let idx = cartItems.findIndex(item => item.id === id);
    if (idx === -1){
      let newItem = { id, title, price, quantity: 1 };
      setCartItems(prev => [...prev, newItem]);
    } else {
      const clonedCart = [...cartItems];
      clonedCart[idx].quantity += 1;
      setCartItems(clonedCart);
    }
  }

  const decreaseCartQuantity = (id) => {
    let idx = cartItems.findIndex(item => item.id === id);
    const clonedCart = [...cartItems];
    if (clonedCart[idx].quantity > 1){
      clonedCart[idx].quantity -= 1;
    } else {
      clonedCart.splice(idx, 1)
    }
    setCartItems(clonedCart);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={cartItems.length} />
      <div className="flex flex-1 bg-orange-100 relative">
        <ProductList 
          products={products} 
          addToCart={addToCart}
        />
        <CartSummary items={cartItems} 
          onDecrease={decreaseCartQuantity}
          addToCart={addToCart}
        />
      </div>
    </div>
  )
}

export default App
