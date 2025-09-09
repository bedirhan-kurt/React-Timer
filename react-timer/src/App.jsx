import {useRef, useState} from "react";

import Timer from "./components/Timer";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  let [darkMode, setDarkMode] = useState(() => {
    const darkModePref = localStorage.getItem("darkMode");
    return darkModePref ? JSON.parse(darkModePref) : "";
  })

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }
  return (
    <div className="flex flex-col items-center gap-8">
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      <h1 className="text-4xl font-semibold dark:text-gray-200">Advanced React Timer</h1>
      <Timer />
    </div>
  );
}

export default App;