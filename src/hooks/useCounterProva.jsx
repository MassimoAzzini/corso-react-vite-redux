import { useEffect } from "react";

function useCounterProva() {
  useEffect(()=>{
    const intervalID = setInterval(()=>{
      const randomNumber = Math.floor(Math.random()*100)
      console.log(randomNumber);
    }, 1000)

    return () => { 
      clearInterval(intervalID) 
    }
  }, [])
}

export default useCounterProva