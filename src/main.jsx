// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import Form from './Form';
// import About from './About';
// import Navbar from './Navbar';
// import Alert from './Alert';



// import{
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom"


  
 
//  const router = createBrowserRouter([
//   {
//     path : "/",
//     element: <Form />,
//   },
//   {
//     path : "/about",
//     element: <About/>,
//   }
//  ]);

  



//  ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>

// <RouterProvider router={router}/>

// </React.StrictMode>
 
//  )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)