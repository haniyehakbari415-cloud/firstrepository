import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./component/CartContext/CartContext";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import FashionGallery from "./component/FashionGallery/FashionGallery";
import InstagramSection from "./component/InstagramSection/InstagramSection";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login";
import ProductList from "./component/ProductList/ProductList";
import Electronics from "./component/Electronics/Electronics";
import NewForYou from "./component/NewForYou/NewForYou";
import WomensClothing from "./component/women'sClothing/women'sClothing";
import Jewelery from "./component/Jewelery/Jewelery";
import MensClothing from "./component/men'sClothing/men'sClothing";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import Cart from "./component/Cart/Cart";
import SignUp from "./component/SignUp/SignUp";

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <NewForYou />
                <div className="h-20"></div>
                <FashionGallery />
                <InstagramSection />
                <div className="h-20"></div>
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <SignUp />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <Navbar />
                <ProductDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/ourproducts"
            element={
              <>
                <Navbar />
                <ProductList />
                <Footer />
              </>
            }
          />
          <Route
            path="/womensclothing"
            element={
              <>
                <Navbar />
                <WomensClothing />
                <Footer />
              </>
            }
          />
          <Route
            path="/mensclothing"
            element={
              <>
                <Navbar />
                <MensClothing />
                <Footer />
              </>
            }
          />
          <Route
            path="/jewelery"
            element={
              <>
                <Navbar />
                <Jewelery />
                <Footer />
              </>
            }
          />
          <Route
            path="/electronics"
            element={
              <>
                <Navbar />
                <Electronics />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
