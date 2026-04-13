import {useState, useEffect} from 'react';

function ControlledInput(){
    const [input, setInput] = useState("")
    const [isVisible, setIsVisible] = useState(true)
    function handleVisibility(){
        return setIsVisible(!isVisible);
    }
    function handleInput(e){
        return setInput(e.target.value)
    }
    return(<>
        <h1 className='mt-7 text-red-800 text-4xl uppercase font-bold'>My Controlled Input</h1>
        <div className='flex gap-4'>
            <input className='w-3xl mt-4 py-3 px-2 border-2' value={input} onChange={handleInput} placeholder='Type Here'/>
            <button className="border-4 rounded-2xl border-red-800  text-[20px] mt-4 py-2 px-4" onClick={handleVisibility}>Hide/Unhide</button>
        </div>
        <div>
            <h2>You Typed:</h2>
            {isVisible&&<p>{input}</p>}
        </div>
    </>)
}

export default ControlledInput