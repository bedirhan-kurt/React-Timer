export default function Input({children, setTimer}) {
  return (
    <input
      className="w-full h-14 p-4 border border-gray-200 rounded-xl shadow-lg dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700"
      type="text"
      placeholder={children}
      onChange={(e) => {setTimer(prev => ({...prev, ["tittle"]: e.target.value}))}}
    />
  )
}