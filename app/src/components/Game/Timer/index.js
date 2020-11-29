// libs
import React, { useState, useEffect } from "react";

// utils
import { formatTime } from "../../../utils/time";

// styles
import { Display } from "./style";

export default function Timer({ active, onFinish }) {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, ms: 0 });
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (active) {
      setTimerActive(true);
      interval = setInterval(() => {
        setTime({
          minutes: time.seconds >= 60 ? time.minutes + 1 : time.minutes,
          seconds:
            time.seconds >= 60
              ? 0
              : time.ms >= 1000
              ? time.seconds + 1
              : time.seconds,
          ms: time.ms >= 1000 ? 0 : time.ms + 10,
        });
      }, 10);
    } else if (timerActive && !active) {
      clearInterval(interval);
      onFinish(time);
    }
    return () => clearInterval(interval);
  }, [active, time]);

  return <Display>{formatTime(time)}</Display>;
}
