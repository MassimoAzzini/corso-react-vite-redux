import { useState, useEffect, useContext } from "react";
import { ProvaContext } from "../store/ProvaContext";

function Example({cities}) {
  // const [count, setCount] = useState(0);


  // useEffect(() => {
  //   localStorage.setItem("count", count.toString());
  //   document.title = `Conteggio: ${count}`;
  //   console.log("ciao da useEffect");
  // }, [count, cities]);

  const {count, setCount} = useContext(ProvaContext)

  return (
    <div>
      <p className="text-white">Conteggio: {count}</p>
  
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
}

export default Example;