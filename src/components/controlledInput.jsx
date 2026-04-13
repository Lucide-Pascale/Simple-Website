import {useState, useEffect} from 'react';

function ControlledInput(){
    const [input, setInput] = useState("")
    function handleInput(e){
        return setInput(e.target.value)
    }
    return(<>
        <h1 className='mt-7 text-red-800 text-4xl uppercase font-bold'>My Controlled Input</h1>
        <input className='w-3xl mt-4 py-3 px-2 border-2' value={input} onChange={handleInput} placeholder='Type Here'/>

        <div>
            <h2>You Typed:</h2>
            <p>{input}</p>
        </div>
    </>)
}

export default ControlledInput