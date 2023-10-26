import { GlobalState } from "@/@types";
import { legendText } from "@/constants";
import { Component } from "solid-js";
import ChartLegendTemplate from "./ChartLegendTemplate";

interface ChartLegendProps {
  globalState: GlobalState
}

const ChartLegend: Component<ChartLegendProps> = props => {
  return (
    <aside
      class="
        absolute
        top-2
        left-3
        z-10
        w-full
        pr-24
        flex
        items-center
        gap-x-4
        gap-y-2
        flex-wrap
      "
    >
      <div
        class="
          font-semibold
        "        
      >
        {legendText(props.globalState.timeFrame)}
      </div>
      <ChartLegendTemplate globalState={props.globalState} />
    </aside>
  )
}

export default ChartLegend
