import { useEffect, useState } from "react";
import Input from "./input";

function App(){
  const [search, setsearch] = useState("")
  const [scrambled, setscrambled] = useState("")
  const [selectedword, setselectedword] = useState("")

  const words = [
    "apple", "banana", "grape", "orange", "mango",
    "carrot", "onion", "tomato", "pepper", "lettuce",
    "laptop", "keyboard", "monitor", "mouse", "speaker",
    "football", "tennis", "hockey", "cycling", "swimming",
    "elephant", "tiger", "zebra", "panda", "rabbit",
    "teacher", "student", "engineer", "doctor", "artist"
  ];

  const [wordsState, setwordsState] = useState(words)

  useEffect(() => {
    function runLogic(){
      let index = words.length
      let random = Math.floor(Math.random() * index)
      let selectedWorld = wordsState[random]
      setselectedword(selectedWorld)
      function scramble(word){
          return word.split("").sort(() => Math.random() - 0.5).join("")
      }
      setscrambled(scramble(selectedWorld))
    }

      runLogic()
  }, wordsState)


  function getData(data){
    setsearch(data)
    selectedword == search ? console.log(selectedword,search) : console.log(selectedword,search)
  }
  function correctLogic(){
    alert("correct")
    words = words.filter(word => word !== selectedword)
    runLogic()
  }

  function wrongLogic(){
    alert("wrong")
  }

  return <div>
    <div>
        <h1>Scrambled word</h1>
        <h1>{scrambled}</h1>
        <Input onSubmit={getData}/>
        
    </div>
  </div>
}

export default App