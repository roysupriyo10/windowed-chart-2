import { Legend } from "@/@types";
import { Time } from "lightweight-charts";

export const initialLegendState: Legend = {
  chartLegendUpdate: {
    txn: 0,
    open: 0,
    color: '#089981',
    close: 0,
    high: 0,
    low: 0,
    volume: 0,
    change: 0,
    time: 0 as Time,
    changePercentage: 0
  },
  chartLegendHovered: {
    txn: 0,
    time: 0 as Time,
    open: 0,
    color: '#089981',
    close: 0,
    high: 0,
    low: 0,
    volume: 0,
    change: 0,
    changePercentage: 0
  },
  hovered: false
}

