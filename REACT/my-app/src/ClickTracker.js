import {useState} from 'react';
import CounterDisplay from './CounterDisplay';

function ClickTracker () {
    const [lastClicked, setLastClicked] = useState(0)      
    const handleLastClicked = (buttonName)=>{
        setLastClicked(buttonName)
    }
    
    return(
        <div>
            <h1>{lastClicked}</h1>
            <button onClick = {()=> handleLastClicked("button1")}>1</button>  
            <button onClick = {()=> handleLastClicked("button2")}>2</button>
            <button onClick = {()=> handleLastClicked("button3")}>3</button>              
        </div>
    )
}


export default ClickTracker;

// per onClick si usa il camelcase, si usa per tutti gli eventi in React
//