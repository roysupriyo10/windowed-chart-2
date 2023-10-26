import { GlobalState } from '@/@types';
import { initialLegendState } from './initialLegendState';

export const initialState: GlobalState = {
  ohlcWebSocket: null,
  chartApi: null,
  candleSeriesApi: null,
  legend: initialLegendState,
  timeFrame: '1m',
  candlesFetched: 4500,
  volumeSeriesApi: null
}
