import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Example() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="text-white mb-3">Conteggio: {count}</p>

      <button
        className="mr-3"
        aria-label="Increment value"
        onClick={()=>dispatch(increment())}>
          Incrementa +
      </button>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}>
        Decrementa -
      </button>

    </div>
  );
}

export default Example;