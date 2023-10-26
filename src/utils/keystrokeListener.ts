import { GlobalState, SUPPORTED_RESOLUTIONS } from "@/@types";
import { SetStoreFunction } from "solid-js/store";

export const keystrokeListener = (
  event: KeyboardEvent,
  globalState: GlobalState,
  setGlobalState: SetStoreFunction<GlobalState>
) => {
  switch (event.code) {
    case 'KeyI':
      if (!event.shiftKey) return
      setGlobalState('timeFrame', () => {
        if (SUPPORTED_RESOLUTIONS.indexOf(globalState.timeFrame) === SUPPORTED_RESOLUTIONS.length - 1) {
          return SUPPORTED_RESOLUTIONS[0]
        }
        else {
          return SUPPORTED_RESOLUTIONS[SUPPORTED_RESOLUTIONS.indexOf(globalState.timeFrame) + 1]
        }
      })
      break;
    case 'KeyC':
      if (!event.shiftKey) return
      setGlobalState('candlesFetched', previous => previous + 1500);
      break;
    default:
      return
  }
}
