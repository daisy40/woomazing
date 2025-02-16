import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { Cart } from "./pages/Cart.jsx"
import { Checkout } from "./pages/Checkout.jsx"
import { Contacts } from "./pages/Contacts.jsx"
import { Shop } from "./pages/Shop.jsx"
import { Success } from "./pages/Success.jsx"
import { Layout } from './components/Layout.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="shop" element={<Shop />} />
          <Route path="success" element={<Success />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
