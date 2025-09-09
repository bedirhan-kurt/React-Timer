import { useState, useEffect, useRef } from "react";

export default function useTimer() {
  const [timer, setTimer] = useState({
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    title: "",
    progress: "0",
    status: "off",
  });

  function updateTimerStatus(newStatus) {
    setTimer((prev) => {
      if (newStatus === "off") {
        return { ...prev, status: newStatus, time: { hours: 0, minutes: 0, seconds: 0 } };
      }

      return { ...prev, status: newStatus };

    });
  }

  useEffect(() => {
    let reducerInterval;
    if (timer.status === "on") {
      reducerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          const { hours, minutes, seconds } = prevTimer.time;
          let totalSeconds = hours * 3600 + minutes * 60 + seconds;

          if (totalSeconds > 0) {
            totalSeconds -= 1;

            return {
              ...prevTimer,
              time: {
                hours: Math.floor(totalSeconds / 3600),
                minutes: Math.floor((totalSeconds % 3600) / 60),
                seconds: totalSeconds % 60,
              },
            };
          } else {
            clearInterval(reducerInterval);
            return { ...prevTimer, status: "off" }; // Stop the timer
          }
        });
      }, 1000);
    }

    return () => {
      if (reducerInterval) {
        clearInterval(reducerInterval);
      }
    };
  }, [timer.status]);

  return { timer, setTimer, updateTimerStatus };
}