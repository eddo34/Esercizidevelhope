import { useState } from "react"
import Welcome from "./Welcome"

function InteractiveWelcome() {
    const [value, setValue] = useState()

    return(
        <div>
            <input value={value} onChange={(event)=>setValue(event.target.value)}></input>
            <Welcome name={value}/>
        </div>
    )
}

export default InteractiveWelcome;