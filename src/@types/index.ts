import { CandlestickData, CandlestickSeriesOptions, HistogramData, HistogramSeriesOptions, IChartApi, ISeriesApi, Time, WhitespaceData } from "lightweight-charts";
import ReconnectingWebSocket from "reconnecting-websocket";

export interface ChartLegend {
  txn: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  time: Time;
  change: number;
  changePercentage: number;
  color: string;
}

export interface Legend {
  chartLegendUpdate: ChartLegend;
  chartLegendHovered: ChartLegend;
  hovered: boolean;
}

export type RESOLUTION = '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d';

export interface GlobalState {
  ohlcWebSocket: ReconnectingWebSocket | null;
  candlesFetched: number;
  chartApi: IChartApi | null;
  timeFrame: RESOLUTION;
  legend: Legend;
  candleSeriesApi: ISeriesApi<
    "Candlestick",
    Time,
    CandlestickData<Time> | WhitespaceData<Time>,
    CandlestickSeriesOptions
  > | null;
  volumeSeriesApi: ISeriesApi<
    "Histogram",
    Time,
    WhitespaceData<Time> | HistogramData<Time>,
    HistogramSeriesOptions
  > | null;
}
