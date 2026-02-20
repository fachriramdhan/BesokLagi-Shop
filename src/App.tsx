import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DropSection from './components/DropSection';
import Manifesto from './components/Manifesto';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (name: string, price: number) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.name === name);
      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].qty++;
        return newCart;
      } else {
        return [...prevCart, { name, price, qty: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const removeItem = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="overflow-x-hidden font-sans text-gray-100 bg-[#080808]">
      <Cursor />
      <div className="noise-bg"></div>
      
      <Navbar cartCount={cartCount} toggleCart={toggleCart} />
      
      <Hero />
      <DropSection addToCart={addToCart} />
      <Manifesto />
      <Footer />
      
      <CartDrawer
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cart={cart}
        removeItem={removeItem}
      />
    </div>
  );
}
