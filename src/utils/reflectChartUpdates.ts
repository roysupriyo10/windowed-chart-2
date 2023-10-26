import { GlobalState } from '@/@types';
import { Time } from "lightweight-charts";

export const reflectChartUpdates = (
  globalState: GlobalState,
) => {
  const close: number = globalState.legend.chartLegendUpdate.close,
    high: number = globalState.legend.chartLegendUpdate.high,
    low: number = globalState.legend.chartLegendUpdate.low,
    open: number = globalState.legend.chartLegendUpdate.open,
    volume: number = globalState.legend.chartLegendUpdate.volume,
    time: Time = globalState.legend.chartLegendUpdate.time,
    change: number = close - open,
    color: string = change > 0 ?
      'rgba(8, 153, 129, 0.5)' :
      'rgba(242, 54, 69, 0.5)'

  if (
    globalState.candleSeriesApi === null ||
    globalState.volumeSeriesApi === null
  ) return

  globalState.candleSeriesApi.update({
    time,
    open,
    high,
    low,
    close
  })

  globalState.volumeSeriesApi.update({
    time,
    value: volume,
    color
  })
}
