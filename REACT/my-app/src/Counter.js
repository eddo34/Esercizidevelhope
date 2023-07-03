import {useEffect,useState} from 'react'

function Counter (props) {
    const [count, setCount] = useState(props.start)      //si inizializza qui a zero
    useEffect(()=>{
        const time = setInterval(()=>{
            setCount(val => val + props.amount)    // qui => non è un arrow func, è il metodo che si usa con la funzione al secondo posto dello useState
        },props.interval)

        return ()=> clearInterval(time)
    })    
                                 
    return(
        <h1>{count}</h1>
    )
}


export default Counter