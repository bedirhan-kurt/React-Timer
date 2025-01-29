export default function TimeBlock({children, setTimer}) {
    return (
        <button
            className="p-6 text-lg bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-100 hover:border-gray-400 hover:cursor-pointer dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => setTimer((prevTimer) => ({
                ...prevTimer,
                time: {
                    hours: 0,
                    minutes: children,
                    seconds: 0
                }
            }))}
        >
            {children} min
        </button>
    )
}