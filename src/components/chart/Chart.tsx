import {
  baseUrls,
  candleSeriesProperties,
  mainChartProperties,
  volumeSeriesProperties
} from "@/constants";
import { chartCrosshairMove, fetchCandles, reflectChartUpdates, updateChartValue } from "@/utils";
import { GlobalState } from "@/@types";
import { createChart } from "lightweight-charts";
import ReconnectingWebSocket from "reconnecting-websocket";
import { Component, createEffect, onCleanup, onMount } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import ChartLegend from "./ChartLegend";

interface ChartProps {
  globalState: GlobalState;
  setGlobalState: SetStoreFunction<GlobalState>;
}

const Chart: Component<ChartProps> = props => {
  let chartContainer: HTMLDivElement | undefined = undefined;

  onMount(() => {
    (async () => {
      props.setGlobalState('chartApi', createChart(
        chartContainer as HTMLDivElement, mainChartProperties
      ));
      if (props.globalState.chartApi === null) return
      
      
      props.setGlobalState(
         'candleSeriesApi',
        props.globalState.chartApi.addCandlestickSeries(
          candleSeriesProperties
        )
      );
      
      props.setGlobalState(
        'volumeSeriesApi',
        props.globalState.chartApi.addHistogramSeries(
          volumeSeriesProperties
        )
      );

      props.setGlobalState('ohlcWebSocket', new ReconnectingWebSocket(
        `${
          baseUrls.wss
        }/btcusdt_perpetual@continuousKline_${
          props.globalState.timeFrame
        }`
      ))

      if (
        props.globalState.candleSeriesApi === null ||
        props.globalState.volumeSeriesApi === null
      ) return

      props.globalState.chartApi.subscribeCrosshairMove(
        (params) => chartCrosshairMove(
          params,
          props.globalState,
          props.setGlobalState
        )
      );

      props.globalState.candleSeriesApi.priceScale().applyOptions({
        scaleMargins: {
          top: 0.1,
          bottom: 0.08
        }
      })

      props.globalState.volumeSeriesApi.priceScale().applyOptions({
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });
    })();
  })

  createEffect(() => {
    fetchCandles(
      props.globalState.timeFrame,
      props.globalState.candlesFetched
    ).then(chartData => {
      if (
        props.globalState.candleSeriesApi === null ||
        props.globalState.volumeSeriesApi === null
      ) return
      if (chartData !== undefined) {
        props.globalState.candleSeriesApi.setData(chartData.ohlcCandles);
        props.globalState.volumeSeriesApi.setData(chartData.volumeBars);
      }
    })
  });

  createEffect(() => {
    if (props.globalState.ohlcWebSocket === null) return
    //@ts-ignore
    if (props.globalState.ohlcWebSocket._url.split('_').at(-1) !== props.globalState.timeFrame) {
      props.setGlobalState('ohlcWebSocket', previousSocket => {
        if (previousSocket === null) return null
        previousSocket.close();
        return new ReconnectingWebSocket(
          `${
            baseUrls.wss
          }/btcusdt_perpetual@continuousKline_${
            props.globalState.timeFrame
          }`
        );
      });
    };

    props.globalState.ohlcWebSocket.onopen = () => {
      console.log('established ws connection with binance.');
    };

    props.globalState.ohlcWebSocket.onclose = () => {
      console.log('terminated ws connection with binance.');
    };

    props.globalState.ohlcWebSocket.onmessage = (message) => updateChartValue(
      message,
      props.setGlobalState
    )
  })

  createEffect(() => reflectChartUpdates(props.globalState))

  onCleanup(() => {
    if (
      props.globalState.chartApi === null ||
      props.globalState.ohlcWebSocket === null
    ) return
    props.globalState.chartApi.remove();
    props.globalState.ohlcWebSocket.close();
  })

  return (
    <div
      ref={chartContainer}
      class="relative h-full"
    >
      <ChartLegend globalState={props.globalState} />
    </div>
  );
};

export default Chart;
