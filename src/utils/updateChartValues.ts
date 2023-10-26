import { GlobalState } from '@/@types';
import { Time } from 'lightweight-charts';
import { SetStoreFunction } from "solid-js/store";

export const updateChartValue = (
  message: MessageEvent,
  setGlobalState: SetStoreFunction<GlobalState>
) => {
  const kline = JSON.parse(message.data).k;

  const close = Number(kline.c),
    high: number = Number(kline.h),
    txn: number = Number(kline.q),
    low: number = Number(kline.l),
    open: number = Number(kline.o),
    volume: number = Number(kline.v),
    time: Time = kline.t / 1000 as Time,
    change: number = close - open,
    isClose: number = Number(kline.x),
    color: string = change > 0 ?
    'rgba(8, 153, 129, 0.5)' :
    'rgba(242, 54, 69, 0.5)'

  isClose && setGlobalState('candlesFetched', previous => previous + 1);

  setGlobalState('legend', 'chartLegendUpdate', {
    txn,
    volume,
    color,
    close,
    low,
    high,
    time,
    open,
    change,
    changePercentage: change / open * 100
  })
}
