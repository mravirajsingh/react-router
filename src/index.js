import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      children: [
         {
            path: '',
            element: <Home />,
         },
         {
            path: 'about',
            element: <About />,
         },
         {
            path: 'contact',
            element: <Contact />,
         },
         {
            path: 'product',
            element: <Product />,
         },
         {
            path: 'product/:productId',
            element: <ProductDetails />,
         },
         {
            path: '*',
            element: <NoPage />,
         },
      ],
   },
]);
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
