import { useState } from "react"
import "./index.css"
function Input(prop){
    const [input, setinput] = useState("")

    function Submit(e){
        e.preventDefault()
        prop.onSubmit(input)
        setinput("")
    }

    return <form onSubmit={(e) => Submit(e)} className="w-[100%] flex flex-row items-center justify-evenly">
        <input type="text" value={input} onChange={(e) => {setinput(e.target.value)}} className="h-[35px] rounded-[12px] bg-[white]"/>
        <button type="submit" className="bg-[red] px-[10px] rounded-[6px] py-[5px]">Enter</button>
    </form>
}

export default Input