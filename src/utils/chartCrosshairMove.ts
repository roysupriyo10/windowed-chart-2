import { GlobalState } from "@/@types";
import { HistogramData, MouseEventParams, OhlcData, Time } from "lightweight-charts";
import { SetStoreFunction } from "solid-js/store";

export const chartCrosshairMove = (
  {
    time,
    seriesData,
  }: MouseEventParams<Time>,
  globalState: GlobalState,
  setGlobalState: SetStoreFunction<GlobalState>
) => {
  if (time) {
    if (
      globalState.candleSeriesApi === null ||
      globalState.volumeSeriesApi === null
    ) return;

    setGlobalState('legend', 'hovered', true);

    const candle = seriesData.get(globalState.candleSeriesApi) as OhlcData;
    const volumeBar = seriesData.get(globalState.volumeSeriesApi) as HistogramData;

    if (!candle || !volumeBar) return

    const {
      low,
      high,
      open,
      close
    } = candle;
    const { value: volume } = volumeBar;

    const change = close - open;
    const color = change >= 0 ? '#089981' : '#f23645';
    const changePercentage = change / open * 100;

    setGlobalState('legend', 'chartLegendHovered', {
      color,
      low,
      high,
      open,
      close,
      change,
      volume,
      changePercentage
    })
  }
}
