import { useState, useEffect } from "react";
import "./index.css"
function Time(prop) {
  const [time, settime] = useState(20);

  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      settime((prevtime) => {
        if (prevtime <= 0) {
          clearInterval(intervalId);
          prop.onChange()
          return 0;
        }
        return prevtime - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1 className="text-[white] mt-[10px]">TIme left: {time}</h1>
    </>
  );
}

export default Time;