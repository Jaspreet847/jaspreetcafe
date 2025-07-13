
import { useState } from 'react';
import './App.css';
import Todo from './containers/Todo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './containers/Login';
import Home from './containers/Home';
import Footer from './components/Footer';
import About from './containers/About';
import Menu from './containers/Menu';
import Services from './containers/Services';
import Gallery from './containers/Gallery';
import ContactUs from './containers/ContactUs';
import PageNotFound from './containers/PageNotFound';
import UserRegister from './containers/UserRegistration';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Profile from './containers/Profile';
import AdminPanel from './dashboard';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import FloatingCart from './components/FloatingCart';
import ReceiptPage from './pages/ReceiptPage';
function App() {


  return (
    <CartProvider>
    <div className="App">
      {
        window.location.pathname === "/dashboard" ? (
          <BrowserRouter>
            <ToastContainer 
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Routes>
              <Route path="/dashboard" element={<AdminPanel />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        ) : (

          <BrowserRouter>
            <Header />
            <ToastContainer 
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/register" element={<UserRegister />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />

              <Route path="/cart" element={<CartPage />} />



              <Route path="/receipt" element={<ReceiptPage />} />

            </Routes>
            <Footer />
            <FloatingCart />
          </BrowserRouter>

          
        )
      }

    </div>
    </CartProvider>
  );
}

export default App;
