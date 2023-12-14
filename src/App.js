 // App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
import Header from './components/navbar/Header';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Header/>
        </Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
           <Route path='/' element={<Home/>}/>
           <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
