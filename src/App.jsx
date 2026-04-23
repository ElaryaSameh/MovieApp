import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import { Provider } from 'react-redux'; 

import ProductDetails from "./Pages/Products/ProductDetails";
import Home from "./Pages/Home/Home";
import Products from './Pages/Products/Products';
import Header from "./Components/Header/Header";
import store from './store/Store'; 

import MoviesList from './Components/MoviesList/MoviesList';

import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { ThemProvider } from './context/them';
import { AuthProvider } from './context/auth';  
import Protected from './Components/Protected/Protected';


function App() {
  const [them, setThem] = useState("light");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
 
  return (
    <div className={`${them === "light" ? "bg-light" : "bg-dark"}`}>
      <AuthProvider value={{ isAuth, setIsAuth }}>
        <ThemProvider value={{ them, setThem }}>
          <Provider store={store}>  
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Products' element={<Protected > <Products /> </Protected>} />
                <Route path='/MoviesList' element={<MoviesList />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path="/ProductDetails/:movieID" element={<ProductDetails />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </ThemProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
