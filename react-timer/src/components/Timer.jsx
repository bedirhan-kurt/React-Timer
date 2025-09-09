import {useRef, useState} from "react";

import useTimer from "../hooks/useTimer";

import Digits from "./Digits.jsx";
import Input from "./Input.jsx";
import Timebar from "./Timebar.jsx";
import Tittle from "./Tittle.jsx";
import Toolbar from "./Toolbar.jsx";
import TimeBlock from "./TimeBlock.jsx";

export default function Timer() {
  const {timer, setTimer, updateTimerStatus} = useTimer();
  const [mainTimerValue, setMainTimerValue] = useState([timer.time.hours, timer.time.minutes, timer.time.seconds])
  let progress;

  const timeBlocks = [5, 10, 25]
  const timeBlockElements = timeBlocks.map((time) => {
    return <TimeBlock key={time} setTimer={setTimer}>{time}</TimeBlock>
  })

  function calculateProgress() {
    const {hours, minutes, seconds} = timer["time"]
    const timerValueSeconds = hours * 3600 + minutes * 60 + seconds

    const [mainHours, mainMinutes, mainSeconds] = mainTimerValue;
    const mainValueSeconds = mainHours * 3600 + mainMinutes * 60 + mainSeconds;

    progress = Math.floor((timerValueSeconds / mainValueSeconds) * 100)
    return progress
  }

  calculateProgress()

  return (
    <div className="flex flex-col items-center gap-6">
      {timer.status !== "off" ? <Tittle>{timer.tittle || "Here will be timer name"}</Tittle> : null}
      <Digits timer={timer} setTimer={setTimer} />
      {timer.status === "off" ? <Input setTimer={setTimer}>Timer name</Input> : null}
      {timer.status !== "off" ? <Timebar progress={progress} /> : null}
      <Toolbar
        timer={timer} setTimer={setTimer} updateTimerStatus={updateTimerStatus}
        mainTimerValue={mainTimerValue} setMainTimerValue={setMainTimerValue}
      />
      <div className="w-full flex justify-center gap-6">
        {timer.status === "off" ? timeBlockElements : null}
      </div>
    </div>
  )
}