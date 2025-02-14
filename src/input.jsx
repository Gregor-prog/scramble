import { useState } from "react"

function Input(prop){
    const [input, setinput] = useState("")

    function Submit(e){
        e.preventDefault()
        prop.onSubmit(input)
        setinput("")
    }

    return <form onSubmit={(e) => Submit(e)} >
        <input type="text" value={input} onChange={(e) => {setinput(e.target.value)}}/>
        <button type="submit">Enter</button>
    </form>
}

export default Input