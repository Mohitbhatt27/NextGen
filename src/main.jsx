import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import ProductPage from './pages/Product.jsx'
import ContactPage from './pages/Contact.jsx'
import Cart from './components/Cart.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='product' element={<ProductPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)