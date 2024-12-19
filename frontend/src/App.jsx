import "./App.css";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute/PrivateRoute";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import CartPage from "./pages/books/CartPage";
import CheckoutPage from "./pages/books/CheckoutPage";
import Footer from "./components/Footer";
import SingleBook from "./pages/books/SingleBook";
import OrderPage from "./pages/books/OrderPage";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-12 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              }
            />
            <Route path="/books/:id" element={<SingleBook />} />

            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <OrderPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
