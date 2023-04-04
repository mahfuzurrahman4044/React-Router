import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Fetch from './component/Fetch/Fetch';
import PhoneDetails from './component/PhoneDetails/PhoneDetails';
import Posts from './component/Posts/Posts';
import PostDetails from './PostDetails/PostDetails';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App></App>
  // },
  // {
  //   path: '/about',
  //   element: <About></About>
  // },
  // {
  //   path: '/contact',
  //   element: <Contact></Contact>
  // }

  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/fetch',
        element: <Fetch></Fetch>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/phone/:phoneId',
        element: <PhoneDetails></PhoneDetails>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.phoneId}`)
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/post/:postId',
        element: <PostDetails></PostDetails>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)