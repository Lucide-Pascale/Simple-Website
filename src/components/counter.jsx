import {useState, useEffect} from 'react';
function Counter(){
    let [count, setCount]= useState(0);
    function handleClick1(){
        
        return setCount(count+1)
    }

    function handleClick2(){
        if (count==0) {alert("You can not go below 0")}
        else {return setCount(count-1)}
    }
    function handleClick3(){
        return setInterval(()=>setCount(count-1),1000)
    
    }
    return(
        <>
            <h1 className='mt-7 text-red-800 text-4xl uppercase font-bold'>My Timer</h1>
            <button className="border-4 rounded-2xl border-red-800 font-bold text-[20px] mt-4 py-2 px-4" onClick={handleClick3}>Start</button>
            <div className="flex gap-4 mt-6">
            <button className='border-2 px-7 py-2 border-amber-600 text-4xl font-extrabold' onClick={handleClick1}>+</button>
            <h6 className='text-9xl'> {count}</h6>           
            <button className='border-2 px-7 py-2 border-amber-600 text-4xl font-extrabold' onClick={handleClick2}>-</button>
            </div>
        </>
    )

}
export default Counter;