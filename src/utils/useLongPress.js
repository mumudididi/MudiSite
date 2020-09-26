import { useState, useEffect } from "react";

//https://stackoverflow.com/questions/48048957/react-long-press-event

//TODO: https://codesandbox.io/s/uselongpress-oekx2?file=/src/useLongPress.js:81-92
//TODO: https://stackoverflow.com/questions/48048957/react-long-press-event
export default function useLongPress(callback = () => {}, ms = 300) {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [callback, ms, startLongPress]);

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  };
}
