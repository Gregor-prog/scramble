import { useState, useEffect } from "react";
import "./index.css"
function Time(prop) {
  const [time, settime] = useState(30);

  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      settime((prevtime) => {
        if (prevtime <= 0) {
          clearInterval(intervalId); // Stop the interval when time reaches 0
          prop.onChange()
          return 0;
        }
        return prevtime - 1;
      });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <h1 className="text-[white] mt-[10px]">TIme left: {time}</h1>
    </>
  );
}

export default Time;