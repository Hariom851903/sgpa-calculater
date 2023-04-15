import React,{ useState }  from "react";
let mark=[];
let credit=[];
function Setfront({ontotal,value})
{   
    const [first,setfirst]=useState(''); 
    const [second,setsecond]=useState(''); 
    const[changebutton,setchangebutton]=useState(false);
    const[sgpa,setsgpa]=useState('');
   const[total,settotal]=useState(false);
   if(ontotal>=1 && total===false)
   {
    settotal(true);
   }
    function clicknext()
    {
        var x=Number(first);
        let y=Number(second);
        if(x>=35)
        {}
        else
        {
         x=0;
        }
        mark=[...mark,x];
        console.log(mark);
        credit=[...credit,y];
        setfirst(0);
        setsecond(0);
        if(Number(ontotal)===Number(mark.length))
        {
            console.log(mark.length)
            setchangebutton(true);
        }
   }
     
  function clicksumit()
  {
    const result=mark.map((value,index)=>(value===0) ?((parseInt((value/10)))*(credit[index])) :((parseInt((value/10))+1)*(credit[index]))); 
    console.log(result);
    const totalcredit=credit.reduce((value,currentvalue)=>value+currentvalue,0)
    const totalresult=result.reduce((value,currentvalue)=>value+currentvalue,0)

    setsgpa((totalresult/totalcredit).toFixed(2));
  
  }
  function resetclick()
  {
     setfirst(0);
     setsecond(0);
     setsgpa(0);
     setchangebutton(false);
     value();
     mark.length=0;
     credit.length=0;
     settotal(false);
  }
    return(
        <>
        {(total) ?
        <div className=" flex flex-col h-full w-full items-center mt-1">
        <div className="flex flex-col h-full w-[40%] sm:w-[60%] gap-10 rounded-md bg-cyan-900 justify-center items-center shadow-lg">
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <label  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70  text-neutral-400">Mark of Subject: {(changebutton) ? '':(mark.length)+1}</label>
        <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3  text-lg text-center text-amber-100"  type="number" value={first} min="0" max="100" onChange={(event)=>setfirst(event.target.value)}></input>
    </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neutral-400">Credit of Subject: {(changebutton) ? '':(mark.length)+1}</label>
        <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3  dark:border-gray-700 dark:text-gray-50 text-2xl text-center text-amber-100" type="number" value={second} min="0" max="100" onChange={(event)=>setsecond(event.target.value)}></input>
        </div>
       <div>{(changebutton) ? <button className="rounded-full bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 " onClick={clicksumit}>submit</button>:<button className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-1.5 mt-4 text-base font-semibold leading-7 text-white hover:bg-indigo-500" onClick={clicknext}>Next<svg
        xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24" stroke-width="1.5"stroke="currentColor"class="w-4 h-4 ml-2">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
  </svg></button>}</div>
        <div className="flex flex-row h-full justify-center items-center bg-fuchsia-200 mb-4">
        <label className="text-4xl  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-10  bg-indigo-200" >SGPA:</label>
        <div className="font-semibold text-3xl rounded-sm bg-slate-200 dark:bg-gray-100 dark:text-gray-800 ">{sgpa}</div>
        </div>
        </div> 
        <button className=" rounded-md bg-green-600 px-3.5 py-1.5 lg:w-[10%] shadow-md mt-7 mb-3 text-base font-bold leading-7 text-white hover:bg-indigo-500"  onClick={resetclick}>Reset All</button>
    </div>
     :''}
         </> 
    );

    }
export default Setfront;
