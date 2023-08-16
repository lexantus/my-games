import { useStateWithHistory } from "../hooks/useStateWithHistory";
import { useState, useEffect, useRef, Fragment } from "react";

export default function Test() {
  const [value, setValue, goBack, goForward, history] = useStateWithHistory(10);
  const [inputVal, setInputVal] = useState(0);
  const historyRef = useRef(value);

  return (
    <Fragment>
      <button onClick={() => historyRef.current = goBack()}>Back</button>
      <button onClick={() => historyRef.current = goForward()}>Forward</button>

      <input
        type="number"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        onClick={() => {
          setValue(inputVal);
          historyRef.current = inputVal;
        }}
      >
        Set value
      </button>
      <div>Value: {value}</div>
      <div>History val: {historyRef.current}</div>
      <span>{history.toString()}</span>
    </Fragment>
  );
}
