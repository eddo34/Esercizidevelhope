import {useState} from 'react';
import CounterDisplay from './CounterDisplay';

function ClickCounter () {
    const [count, setCount] = useState(0)      
    const handleButton = ()=>{
        setCount((val)=> val + 1)
    }
    
    return(
        <div>
            <CounterDisplay count={count} />
            <button onClick={handleButton}>Click</button>                
        </div>
    )
}


export default ClickCounter;

// per onClick si usa il camelcase, si usa per tutti gli eventi in React