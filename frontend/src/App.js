import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { 
  LoginPage, 
  SignupPage, 
  ActivationPage, 
  HomePage, 
  ProductsPage,
  ProductDetailsPage, 
  BestSellingPage, 
  EventsPage, 
  FAQPage,
  ProfilePage,
  CheckoutPage,
  ShopCreatePage,
  SellerActivationPage } from "./Routes.js";
import { ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from 'axios';
// import { server } from './server.js';
import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js';
import { useSelector } from 'react-redux';
import ProtectedRoute from './ProtectedRoute.js';

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user)
  useEffect(() => {
    Store.dispatch(loadUser());
    // axios.get(`${server}/user/getuser`, {withCredentials:true}).then((res) =>{
    //   toast.success(res.data.message);
    // }).catch((err) =>{
    //   toast.error(err.response.data.message);
    // })
  }, []);

  return (
    <>
      {
        loading ? (
          null
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/sign-up' element={<SignupPage />} />
              <Route
                path='/activation/:activation_token'
                element={<ActivationPage />} />
                <Route
                path='/seller/activation/:activation_token'
                element={<SellerActivationPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/prduct/:name" element={<ProductDetailsPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path='/checkout' element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CheckoutPage />
              </ProtectedRoute>}/>
              <Route path="/profile" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/shop-create" element={<ShopCreatePage />} />
            </Routes>


            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </BrowserRouter>
        )
      }
    </>
  )
}

export default App
