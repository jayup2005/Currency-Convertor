import React, { useState } from 'react';
import Currency_select from './currencyselect';
import axios from 'axios'



const API_KEY = import.meta.env.VITE_API_KEY;
;
console.log(API_KEY)
export default function Converter(){
   
    let [from,setfrom] = useState('USD');
    let [to,setto] = useState('INR');
    let[amt,setamt] = useState();
    let [res,setres] = useState("")

    function changecur(){
        setfrom(to);
        setto(from);
    }
   
    function val(e){
        
        setamt(e.target.value);

    }
   
    async function conv() {
        const api_url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}`;
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            console.log(data);
            
            let final_value = (amt * (data.conversion_rate)).toFixed(5);
            
            setres(`${amt} ${from} = ${final_value} ${to}`)
            console.log({res})
            console.log(final_value);
          
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    }
    

    
    return <>
      <div className='w-[25rem] bg-btra border-bor border-2 h-96 p-5 py-10 rounded-lg mx-auto mt-[8rem] '>
        <div className='flex flex-col '>
            <label className='text-white font-medium'>Enter Amount</label>
            <input type="text" className='h-8 text-center rounded-md outline-none' onChange={val}/>
        </div>
        <br />
        <div className='flex py-10 items-center justify-between'>
           
         <Currency_select scur={from} hcur={e => setfrom(e.target.value)} />
        <div  className='flex justify-center  text-white h-[35px] w-[35px] bg-btra border-bor border-2 rounded-full mt-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 24"  stroke="currentColor" onClick={changecur}>
            <path  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
         </div>
         <Currency_select scur={to} hcur={e => setto(e.target.value)}/>
        </div>

        <div className='flex items-center justify-center flex-col'>
            <button onClick={conv} type='submit' className='w-44 h-8 content-center rounded-md text-white font-bold  bg-slate-700 border-bor border-2'>Convert</button>
            <p className='text-white mt-3 w-56 h-8 bg-slate-700 font-bold content-center text-center border-bor border-2 rounded-md'>{res}</p>
        </div>
       
        
      </div>
    </>
}
