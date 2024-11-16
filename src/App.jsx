import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Order from './pages/Order';
import Product from './pages/Product';
import Categories from './pages/Categories';
import Farmer from './pages/Farmer';
import Review from './pages/Review';
import { CartProvider } from './context/CartContext';
import CartPage from './components/CartPage';
import SingleProductPage from './pages/SingleProductPage';
import products from './components/data';
import Error404Page from './pages/Error404Page';
import CheckoutPage from './pages/CheckoutPage';
import ScrollToTop from './components/ScrolltoTop';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
  console.log(selectedCategory)
  return (
    <>
      <CartProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          
          {/* Pass setSelectedCategory to Categories and selectedCategory to Product */}
          <Route
            path="/categories"
            element={<Categories onCategorySelect={setSelectedCategory} />}
          />
          <Route
            path="/product"
            element={<Product category={selectedCategory} />}
          />

          <Route path="/product/:id" element={<SingleProductPage products={products} />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/review" element={<Review />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
