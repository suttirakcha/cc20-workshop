import { useEffect, useState } from "react";
import CartSummary from "./components/CartSummary"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartShowing, setIsCartShowing] = useState(true);

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

  const removeFromCart = (id) => {
    let idx = cartItems.findIndex(item => item.id === id);
    const clonedCart = [...cartItems];
    clonedCart.splice(idx, 1)
    setCartItems(clonedCart);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        itemCount={cartItems.length} 
        isCartShowing={isCartShowing} 
        setIsCartShowing={setIsCartShowing}
      />
      <div className="flex flex-1 bg-orange-100 relative">
        <ProductList 
          products={products} 
          addToCart={addToCart}
          className={`${isCartShowing ? 'w-2/3' : 'w-full'}`}
        />
        <CartSummary items={cartItems} 
          onDecrease={decreaseCartQuantity}
          onRemove={removeFromCart}
          addToCart={addToCart}
          isShowing={isCartShowing}
        />
      </div>
    </div>
  )
}

export default App
