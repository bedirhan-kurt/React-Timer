import Timer from "./components/Timer";
import { DarkModeProvider } from "./hooks/useDarkMode.jsx";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <DarkModeProvider>
      <div className="flex flex-col items-center gap-8">
        <DarkModeToggle />
        <h1 className="text-4xl font-semibold dark:text-gray-200">Advanced React Timer</h1>
        <Timer />
      </div>
    </DarkModeProvider>
  );
}

export default App;