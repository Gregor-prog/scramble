import { useEffect, useState } from "react";
import Input from "./input";
import Time from "./time";
import "./index.css"
function App(){
  const [search, setsearch] = useState("")
  const [scrambled, setscrambled] = useState("")
  const [selectedword, setselectedword] = useState("")
  const [restartTimeKey, setRestartTimeKey] = useState(0);
  const [score, setscore] = useState(0)

  let words = [
    "apple", "banana", "grape", "orange", "mango",
    "carrot", "onion", "tomato", "pepper", "lettuce",
    "laptop", "keyboard", "monitor", "mouse", "speaker",
    "football", "tennis", "hockey", "cycling", "swimming",
    "elephant", "tiger", "zebra", "panda", "rabbit",
    "teacher", "student", "engineer", "doctor", "artist"
  ];

  let [wordsState, setwordsState] = useState(words)

  function runLogic(){
    let index = wordsState.length
    console.log(index)
    let random = Math.floor(Math.random() * index)
    console.log(random)
    let selectedWorld = wordsState[random]
    setselectedword(selectedWorld)
    function scramble(word){
        return word.split("").sort(() => Math.random() - 0.5).join("")
    }
    setscrambled(scramble(selectedWorld))
  }
  useEffect(() => {
      runLogic()
  }, [])


  function getData(data){
    setsearch(data)
    selectedword == data ? correctLogic() : wrongLogic() 
  }

  function correctLogic(){
    alert("correct")
    words = wordsState.filter(word => word !== selectedword)
    setwordsState(words)
    runLogic()
    console.log(wordsState.length)
    restartTime()
    setscore((prevscore) => prevscore + 1)

    if (score == 10) {
      win()
    }
  }

  function win(){
    console.log("you won, now vibe")
  }

  function wrongLogic(){
    alert("wrong")
    restartTime()
  }

  function timeOut(){
    // alert("time Out")
    setscore(0)
    runLogic()
    restartTime()
  }

  function restartTime() {  
    setRestartTimeKey((prevKey) => prevKey + 1); // Update the key to restart Time component
  }



  return <div className="bg-[#000000] h-[100vh] w-[100vw] flex flex-row items-center justify-center">
    <div className="bg-[#363636] h-[50%] w-[45%] rounded-[12px] p-[20px]">
        <h1 className="text-center text-[40px] font-semibold text-white">Scrambled...</h1>
        <h1 className="text-[white] text-[15px]">hint:  starts with...<span className="text-[red] text-[25px]"> {selectedword[0].toLocaleUpperCase()} </span>  </h1>
        <h1 className="text-center text-[50px] text-[white] ">{scrambled.toUpperCase()}</h1>
        <Input onSubmit={getData}/>
        <Time key={restartTimeKey} onChange={timeOut}/>
        <h1>score: {score}</h1>
    </div>
  </div>
}

export default App