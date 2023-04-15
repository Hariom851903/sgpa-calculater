import { useState } from "react";
import Get from "./Setfront"
function Myfirst()
{ 
    const [subjects,setsubject]=useState(' ');
   const [store,setstore]=useState(0);
   const handle = (event)=> setsubject(event.target.value);
    const click=()=>setstore(subjects);
  function resetvalue()
    {
        console.log("HAriom Asati");
        setsubject(0);    
        setstore(0);   
    }
    return (
        <>
        <div className="flex flex-col h-100% w-80% md:gap-10 sm:gap-5 justify-center items-center bg-gray-700 shadow-lg">
        <h1 className="md:text-5xl sm:text-3xl  text-yellow-400  bg-black shadow-md lg:mt-20 sm:mt-8 md:mt-10">SGPA CALCULATION</h1>
        <div className="flex w-full h-full max-w-sm  items-center space-x-2">
          <div className="grid w-full  h-20 max-w-sm  items-center gap-1.5">
           <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
           peer-disabled:opacity-70  text-blue-400"> Total Subject</label>
            <input type="number" className="color-white h-10 rounded-md border-sm font-bold bg-white  py-2 px-3 text-2xl text-center
             text-black placeholder:text-gray-400 
              dark:border-gray-700
               dark:focus:ring-offset-gray-900" value={subjects}   onChange={handle} min="1" max="10"/> 
        </div>
       <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium 
       transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1
        dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 
        disabled:pointer-events-none text-white hover:bg-indigo-700 h-10 py-2 px-4 mt-8" onClick={click}>submit</button>  
        </div>
        <Get ontotal={store} value={resetvalue}></Get>
        </div>
 </>
    )
}
export default Myfirst;
