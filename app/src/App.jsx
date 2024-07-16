import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './comppnents/Home/Home'
import NavBar from './comppnents/NavBar/NavBar'
import About from './comppnents/About/About'
import MasterLayout from './comppnents/MasterLayout/MasterLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './comppnents/NotFound/NotFound'
import Skills from './comppnents/Skills/Skills'
import Experience from './comppnents/Experience/Experience'
import Work from './comppnents/Work/Work'



const routes = createBrowserRouter([
  {

    path: '/',
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "experience", element: <Experience /> },
      { path: "work", element: <Work /> },
    ],
  },
]);

function App() {


  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
