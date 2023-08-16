import { useState } from "react";

export function useStateWithHistory(initialState) {
  const [value, setValue] = useState(initialState);
  const [history, setHistory] = useState([value]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const setHistoryValue = newValue => {
     setHistory([...history, newValue]);
     if (currentIndex === history.length - 1) setCurrentIndex(currentIndex + 1);
     setValue(newValue);
  }

  const goBack = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
    return history[currentIndex];
  }

  const goForward = () => {
    if (currentIndex + 1 < history.length) {
      setCurrentIndex(currentIndex + 1);
    }
    return history[currentIndex];
  }

  return [value, setHistoryValue, goBack, goForward, history];
}
