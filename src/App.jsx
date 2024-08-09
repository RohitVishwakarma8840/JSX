import { useState } from 'react'

import './App.css'
import Card from './Components/Card';

function App() {

  // const data=["jake","rohit rover","jutta","selena gomez"];

  return (
    <>


    {/* <div> */}
      {/* {data.map((value,index)=><h1 key={index}>HEY</h1>)} */}
      {/* <div className="px-3 py-4 bg-zinc-300 rounded-md w-fit">hey</div> */}
      {/* </div> */}


 {/* // How to show data dynamically like you understand  */}

     {/* <div>
     {data.map((elem,index)=>(
      <div key={index} className="px-3 py-4 bg-zinc-300 rounded-md w-fit">{elem}</div>
     ))}

     </div> */}

     {/* <Navbar/>
     <Hero/>
     <SecondPage/> */}
     <Card/>



    </>
  )
}

export default App
