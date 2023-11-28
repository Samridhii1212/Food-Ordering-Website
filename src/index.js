import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/about';
import Contact from './components/contact';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Error from './components/error';
import Body from './components/body';
import Menu from './components/menu';
import Unmount from './components/unmount';
import Cart from './components/cart';



const approuter = createBrowserRouter
  (
    [
      {
        path: "/",
        element:<App/>,

        children:[
          {
            path: "/",
            element: <Body/>
          },
          {
            path: "/about",
            element: <About />
          }
          ,
          {
            path: "/contact",
            element: <Contact />
          }
          ,
          {
            path: "/unmount",
            element: <Unmount />
          }
          ,
          {
            path: "/restaurant/:resid",
            element: <Menu/>
          }
          ,
          {
            path: "/cart",
            element: <Cart/>
          }

        ],

        errorElement:<Error/>
      }
      
      
    ]
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter}/>);

