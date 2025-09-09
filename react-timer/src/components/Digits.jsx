import {useRef} from "react";

export default function Digits({ timer, setTimer }) {
  function updateTimer(e, type) {
    setTimer((prev) => ({
      ...prev,
      time: {
        ...prev.time,
        [type]: Number(e.target.value),
      },
    }));
  }

  const isDisabled = timer.status === "on";

  return (
    <div className="w-120 h-36 flex justify-center items-center p-4 border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <input
        className="w-1/3 text-center font-medium text-[86px] text-black focus:outline-none appearance-none [-moz-appearance:textfield] dark:text-gray-300 "
        type="number"
        max={23}
        value={timer.time.hours === 0 ? "00" : timer.time.hours}
        disabled={isDisabled}
        onInput={(e) => updateTimer(e, "hours")}
      />
      <span className="text-[86px] text-black dark:text-gray-300">:</span>

      <input
        className="w-1/3 text-center font-medium text-[86px] text-black focus:outline-none appearance-none [-moz-appearance:textfield] dark:text-gray-300 "
        type="number"
        max={59}
        value={timer.time.minutes === 0 ? "00" : timer.time.minutes}
        disabled={isDisabled}
        onInput={(e) => updateTimer(e, "minutes")}
      />
      <span className="text-[86px] text-black dark:text-gray-300">:</span>

      <input
        className="w-1/3 text-center font-medium text-[86px] text-black focus:outline-none appearance-none [-moz-appearance:textfield] dark:text-gray-300 "
        type="number"
        max={59}
        value={timer.time.seconds === 0 ? "00" : timer.time.seconds}
        disabled={isDisabled}
        onInput={(e) => updateTimer(e, "seconds")}
      />
    </div>
  );
}


