
import Die from "./components/Die";

export default function App() {
  return(
    <main className="w-96 h-96  bg-white
     rounded-md flex justify-center items-center">
      <div className="grid grid-cols-5 grid-rows-2 gap-x-5 gap-y-6">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  )
}

