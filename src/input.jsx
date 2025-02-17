import { useState } from "react"
import "./index.css"
function Input(prop){
    const [input, setinput] = useState("")

    function Submit(e){
        e.preventDefault()
        prop.onSubmit(input.toLowerCase())
        setinput("")
    }

    return <form onSubmit={(e) => Submit(e)} className="w-[100%] flex flex-row items-center justify-evenly">
        <input type="text" value={input} onChange={(e) => {setinput(e.target.value)}} className="h-[33px] rounded-[12px] bg-[white] w-[60%] p-[20px] font-semibold"/>
        <button type="submit" className="bg-green-500 px-[10px] rounded-[6px] py-[5px] text-white hover:bg-green-600">Enter</button>
    </form>
}

export default Input