import { useEffect, useState } from "react";
import Input from "./input";
import Time from "./time";

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
    alert("time Out")
    setscore(0)
    runLogic()
    restartTime()
  }

  function restartTime() {  
    setRestartTimeKey((prevKey) => prevKey + 1); // Update the key to restart Time component
  }



  return <div>
    <div>
        <h1>Scrambled word</h1>
        <h1>hint: firstLetter {selectedword[1]}</h1>
        <h1>{scrambled}</h1>
        <Input onSubmit={getData}/>
        <Time key={restartTimeKey} onChange={timeOut}/>
        <h1>score: {score}</h1>
    </div>
  </div>
}

export default App