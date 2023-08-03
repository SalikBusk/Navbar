import React, { Children } from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Container from './Components/Container';
import Navbar from './Components/Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <div className='h-[200vh]'><Container>hello word</Container></div>
      },
      {
        path: "/about",
        element: <div>hello word - about</div>
      }
    ],
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
