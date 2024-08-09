import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SecondPage from './Components/SecondPage';

function App() {

  const data=["jake","rohit rover","jutta","selena gomez"];

  return (
    <>


    {/* <div> */}
      {/* {data.map((value,index)=><h1 key={index}>HEY</h1>)} */}
      {/* <div className="px-3 py-4 bg-zinc-300 rounded-md w-fit">hey</div> */}
      {/* </div> */}

     <div>
     {data.map((elem,index)=>(
      <div key={index} className="px-3 py-4 bg-zinc-300 rounded-md w-fit">{elem}</div>
     ))}

     </div>

     <Navbar/>
     <Hero/>
     <SecondPage/>



    </>
  )
}

export default App
