import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/about",
    element:<About></About>
  },
  {
    path:"/contact",
    element:<Contact></Contact>
  },
  {
    path:"*",
    element:<h4>Page not found</h4>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}></RouterProvider>
);


