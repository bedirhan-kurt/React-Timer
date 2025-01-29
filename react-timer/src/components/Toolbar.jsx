export default function Toolbar({timer, setTimer, updateTimerStatus, mainTimerValue, setMainTimerValue}) {
    const playButtonAction = timer.status === "off" ? "on" : timer.status === "on" ? "paused" : "on"

    return (
        <div className="w-2/3 flex justify-center gap-6">
            {timer.status !== "off" ?
                <button className="hover:cursor-pointer hover:scale-110 dark:text-gray-300 transition-all duraion-200 ease"
                onClick={() => {
                    setTimer((prevTimer) => ({
                        ...prevTimer,
                        time: {
                            hours: mainTimerValue[0],
                            minutes: mainTimerValue[1],
                            seconds: mainTimerValue[2]
                        }
                    }))
                }}
                >
                    <i className="text-5xl ri-loop-left-fill"></i>
                </button> : null}

            <button className="hover:cursor-pointer hover:scale-110 dark:text-gray-300 transition-all duraion-200 ease" onClick={() => {
                updateTimerStatus(playButtonAction)
                if (timer.status === "off") setMainTimerValue([timer.time.hours, timer.time.minutes, timer.time.seconds])
            }}>
                <i className={`text-6xl ri-${timer.status === "off" ? "play" : timer.status === "on" ? "pause" : "play"}-circle-fill`}></i>
            </button>

            {timer.status !== "off" ?
                <button className="hover:cursor-pointer hover:scale-110 dark:text-gray-300 transition-all duraion-200 ease" onClick={() => updateTimerStatus("off")}>
                    <i className="text-6xl ri-stop-circle-line"></i>
                </button> : null}
        </div>
    )
}