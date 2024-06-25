import { useState } from 'react'
import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import About from './About';
import Alert from './Alert';

import {
  createBrowserRouter,RouterProvider
 } from "react-router-dom";
 


 function App() {



const [mode, setmode] = useState('light')
  
  const [alert, setAlert] = useState("")

  const showAlert = (Message, type)=>{
   
    setAlert({
      msg: Message,
      type: type

    })
    setTimeout(()=>{

      setAlert(null)
  },1000)
  }


 const toggleMode = ()=>{
    
    if(mode==='light')
      {
        setmode('dark')
        document.body.style.background = '#36374c'
        showAlert("dark mode is inable","success")
      
      }
      else
      {
        setmode('light')
        document.body.style.background = 'white'
        showAlert("light mode is inable","success")

        // conaole.log()
      }
  }

  const router = createBrowserRouter([

    {
      path : "/",
      element: <>
    
      <Navbar title="My website"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Form showAlert={showAlert} heading="Enter yor text in field" mode={mode} />
                
      </>
    },
    {
      path : "/about",
      element: <>
      
      <Navbar title="My website"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <About mode={mode}/>

      </>
    }

  ])
  
  
    return (
      <>


   <RouterProvider router={router}/>
 
      </>
    )
  }
 
  
  export default App;



 









  
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

//   function Navbar(){
//   return (<>
//   <li>Home</li>
//   <li>about</li>
//   <li>contect</li>
//   </>
//   )
// }

// let userStatment = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, aperiam facere ex molestias consequuntur maiores veniam perspiciatis quisquam consequatur enim, quibusdam atque. Perspiciatis vero incidunt quo autem eos impedit exercitationem."
// function React()
// {
//   return (
//   <><div><h1>this is my website {userStatment}</h1>
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&usqp=CAU" alt="" /></div>
//   <li className="username">my name is Anil</li>
//   </>)
// }



// export default React;

//   function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <Navbar/>
//       <MyButton />
//       <React/>
//     </div>
//   );
// }






