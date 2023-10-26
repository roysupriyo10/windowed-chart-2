import { createStore } from "solid-js/store"
import { initialState } from "./constants"
import { GlobalState } from "./@types"
import { Chart } from "./components"
import { onCleanup, onMount } from "solid-js";
import { keystrokeListener } from "./utils";

function App() {
  const [globalState, setGlobalState] = createStore<GlobalState>(initialState);

  const listener = (event: KeyboardEvent) => keystrokeListener(
    event,
    globalState,
    setGlobalState,
  )

  onMount(() => {
    window.addEventListener(
      'keydown',
      listener
    );
  })

  onCleanup(() => {
    window.removeEventListener(
      'keydown',
      listener
    )
  })

  return (
    <>
      <Chart
        globalState={globalState}
        setGlobalState={setGlobalState}
      />
    </>
  )
}

export default App
