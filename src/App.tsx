import { createStore } from "solid-js/store"
import { initialState } from "./constants"
import { GlobalState } from "./@types"
import { Chart } from "./components"

function App() {
  const [globalState, setGlobalState] = createStore<GlobalState>(initialState)

  return (
    <Chart
      globalState={globalState}
      setGlobalState={setGlobalState}
    />
  )
}

export default App
