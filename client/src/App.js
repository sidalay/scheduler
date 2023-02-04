import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './style.scss';

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
    ]
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
