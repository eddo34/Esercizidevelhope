import {useEffect,useState} from 'react'

function Counter () {
    const [count, setCount] = useState(0)      //si inizializza qui a zero
    useEffect(()=>{
        const time = setInterval(()=>{
            setCount(val => val + 1)    // qui => non è un arrow func, è il metodo che si usa con la funzione al secondo posto dello useState
        },1000)

        return ()=> clearInterval(time)
    })    
                                 
    return(
        <h1>{count}</h1>
    )
}


export default Counter