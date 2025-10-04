import { useDispatch, useSelector } from "react-redux";
import {
  pdecrement,
  pincrement,
} from "../redux/practice-hooks-counter/actions";

function PracticeHooksCounter() {
  const count = useSelector((state) => state.practiceCounter.value);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(pincrement(20));
  };
  const decrement = () => {
    dispatch(pdecrement(10));
  };
  return (
    <div class="max-w-md mx-auto mt-10 space-y-5">
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div class="text-2xl font-semibold">{count}</div>
        <div class="flex space-x-3">
          <button
            onClick={increment}
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            class="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default PracticeHooksCounter;
