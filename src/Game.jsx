import { useEffect, useState } from "react";
import Input from "./input";
import Time from "./time";
import "./index.css"
import { Toaster, toast } from 'sonner';


function Game(){
  const [search, setsearch] = useState("")
  const [scrambled, setscrambled] = useState("")
  const [selectedword, setselectedword] = useState("")
  const [restartTimeKey, setRestartTimeKey] = useState(0);
  const [score, setscore] = useState(0)

  let words = [
    "apple", "banana", "grape", "orange", "lemon", "peach", "melon", "berry", "mango", "kiwi",
    "chair", "table", "sofa", "bed", "lamp", "door", "window", "shelf", "clock", "mirror",
    "water", "bread", "sugar", "honey", "cheese", "butter", "pasta", "pizza", "salad", "cookie",
    "phone", "laptop", "mouse", "screen", "cable", "button", "remote", "speaker", "camera", "charger",
    "happy", "funny", "lucky", "brave", "kind", "smart", "quick", "sunny", "quiet", "strong",
    "jump", "run", "walk", "swim", "climb", "read", "write", "draw", "sing", "dance"
  ];
  
  
  
  

  let [wordsState, setwordsState] = useState(words)

  async function runLogic(){
      let i = 0

    let sccc = setInterval(() => {
      i+=1
    let length = wordsState.length
    let random = Math.floor(Math.random() * length)
       let selectedWorld = wordsState[random]
    setselectedword(selectedWorld)
    function scramble(word){
        return word.split("").sort(() => Math.random() - 0.5).join("")
    }
    setscrambled(scramble(selectedWorld))
      
    i == 10 ? clearInterval(sccc) : null
    }, 50);
  }
  useEffect(() => {
        runLogic()
  }, [])


  function getData(data){
    setsearch(data)
    selectedword == data ? correctLogic() : wrongLogic() 
  }

  function correctLogic(){
    toast.success("correct, you score has increased")
    words = wordsState.filter(word => word !== selectedword)
    setwordsState(words)
    runLogic()
    restartTime()
    setscore((prevscore) => prevscore + 1)

    if (score == 9) {
      win()
    }
  }

  function win(){
    toast.success('congrats, you won!')
    setTimeout(() => {
    window.location.reload();
    }, 1000);
  }

  function wrongLogic(){
    toast.warning('Wrong, Try again')
    runLogic()
    restartTime()
  }

  function timeOut(){
    toast.error('Timeout, you tried your best!')
    setscore(0)
    runLogic()
    restartTime()
  }

  function restartTime() {  
    setRestartTimeKey((prevKey) => prevKey + 1); // Update the key to restart Time component
  }



  return <div className="bg-[#000000] h-[100vh] w-[100vw] flex flex-row items-center justify-center">
        <Toaster richColors/>
    <div className="bg-gray-800 sm:h-[50%] sm:w-[50%] rounded-[12px] p-[20px]  h-[350px] w-[100%]">
        <h1 className="text-center text-[40px] font-semibold text-white">Scrambled...</h1>
        <h1 className="text-[white] text-[15px]">hint:  starts with...<span className="text-green-500 text-[25px]"> {selectedword[0]} </span>  </h1>
        <h1 className="text-center text-[50px] text-[white] ">{scrambled.toUpperCase()}</h1>
        <Input onSubmit={getData}/>
        <Time key={restartTimeKey} onChange={timeOut}/>
        <h1 className="text-[white] mt-[10px]" >score: {score}</h1>
    </div>
  </div>
}

export default Game