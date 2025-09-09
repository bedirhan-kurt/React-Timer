export default function Timebar({progress}) {
  return (
    <div className="w-full h-8 bg-white border border-gray-200 rounded-full shadow-md dark:border-gray-700">
      <div
        className={`h-8 bg-black border border-gray-200 rounded-full dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 ease`}
        style={{ width: `${Number(progress)}%` }}
      />
    </div>
  )
}