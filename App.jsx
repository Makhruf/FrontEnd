// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import IndukAyam from "./Pages/Induk-ayam";
import State from "./Pages/State";
import EventHandling from "./Pages/EventHandling";
import UseEffect from "./Pages/UseEffect";
import UpdateState from "./component/UpdateState";
import Animasi from "./component/Animasi";
import FetchApi from "./component/FetchApi";
import { MyContext } from "./Pages/MyContext";
import ReactContext from "./Pages/ReactContext";

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

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/IndukAyam" element={<IndukAyam/>}/>
      <Route path="/State" element={<State/>}/>
      <Route path="/EventHandling" element={<EventHandling/>}/>
      <Route path="/UseEffect" element={<UseEffect/>}/>
      <Route path="/UpdateState" element={<UpdateState/>}/>
      <Route path="/Animasi" element={<Animasi/>}/>
      <Route path="/FetchApi" element={<FetchApi/>}/>
      <Route path="/ReactContext" element={<ReactContext/>}/>
    </Routes>
   );
}

export default App;
