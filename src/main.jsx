import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Landing from './components/Landing.jsx'
import ProductList from './components/ProductList.jsx'
import Layout from './components/Layout.jsx'
import Cart from './components/Cart.jsx'
import Login from './components/Login.jsx'
import Admin from './components/Admin.jsx'
import Orders from './components/Orders.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<Layout/>}>
        <Route path='/products' element={<ProductList/>}/>
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>
        } />
        <Route path='/admin' element={
          <ProtectedRoute requiredRole="admin">
            <Admin/>
          </ProtectedRoute>
        }/>
        <Route path='/orders' element={
          <ProtectedRoute>
            <Orders/>
          </ProtectedRoute>
        }/>
      </Route>
    </Routes>
  </BrowserRouter>
)
