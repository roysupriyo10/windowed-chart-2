import { timeFormatter } from "@/utils";
import {
  CandlestickStyleOptions,
  ChartOptions,
  ColorType,
  CrosshairMode,
  HistogramStyleOptions,
  SeriesOptionsCommon
} from "lightweight-charts";

export const mainChartProperties: ChartOptions = {
  height: 0,
  width: 0,
  crosshair: {
    mode: CrosshairMode.Normal,
    vertLine: {
      color: '#9598A1',
      width: 1,
      style: 4,
      visible: true,
      labelVisible: true,
      labelBackgroundColor: '#4c525e'
    },
    horzLine: {
      color: '#9598A1',
      width: 1,
      style: 4,
      visible: true,
      labelVisible: true,
      labelBackgroundColor: '#4c525e'
    }
  },
  layout: {
    background: {
      type: ColorType.VerticalGradient,
      topColor: '#0c0c0c',
      bottomColor: '#000000'
    },
    textColor: 'white',
    fontFamily: 'IBM Plex Sans',
    fontSize: 12,
  },
  autoSize: true,
  grid: {
    vertLines: {
      color: '#242832',
      visible: true,
      style: 1
    },
    horzLines: {
      color: '#242832',
      visible: true,
      style: 1
    },
  },
  timeScale: {
    minimumHeight: 0,
    uniformDistribution: true,
    borderColor: '#2b2b43',
    timeVisible: true,
    secondsVisible: false,
    rightOffset: 22,
    barSpacing: 0,
    minBarSpacing: 0.5,
    fixLeftEdge: false,
    fixRightEdge: false,
    lockVisibleTimeRangeOnResize: false,
    rightBarStaysOnScroll: true,
    borderVisible: true,
    visible: true,
    shiftVisibleRangeOnNewBar: true,
    tickMarkFormatter: undefined,
    ticksVisible: false
  },
  rightPriceScale: {
    minimumWidth: 0,
    autoScale: true,
    mode: 0,
    invertScale: false,
    alignLabels: true,
    scaleMargins: { bottom: 0.1, top: 0.2 },
    borderVisible: true,
    textColor: '#cacaca',
    entireTextOnly: true,
    visible: true,
    ticksVisible: true,
    borderColor: '#2b2b43'
  },
  localization: {
    dateFormat: "dd MMM 'yy'",
    timeFormatter: timeFormatter,
    priceFormatter: (price) => price.toFixed(1),
    locale: 'us'
  },
  watermark: {
    color: 'rgba(0,0,0,0)',
    visible: false,
    text: '',
    fontSize: 48,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Google Sans', Roboto, Ubuntu, sans-serif`,
    fontStyle: '',
    horzAlign: 'center',
    vertAlign: 'center',
  },
  handleScale: true,
  handleScroll: true,
  trackingMode: {
    exitMode: 0
  },
  kineticScroll: {
    mouse: false,
    touch: true
  },
  leftPriceScale: {
    minimumWidth: 0,
    autoScale: true,
    mode: 0,
    invertScale: false,
    alignLabels: true,
    scaleMargins: { bottom: 0.1, top: 0.2 },
    borderVisible: true,
    textColor: '#cacaca',
    entireTextOnly: false,
    visible: false,
    ticksVisible: false,
    borderColor: '#2b2b43'
  },
  overlayPriceScales: {
    minimumWidth: 0,
    mode: 0,
    invertScale: false,
    alignLabels: true,
    scaleMargins: { bottom: 0.1, top: 0.2 },
    borderVisible: true,
    textColor: '#cacaca',
    entireTextOnly: false,
    ticksVisible: false,
    borderColor: '#2b2b43'
  }
};

//@ts-ignore
export const candleSeriesProperties: SeriesOptionsCommon<CandlestickStyleOptions> = {
  upColor: '#089981',
  downColor: '#F23645',
  borderDownColor: '#F23645',
  borderUpColor: '#089981',
  wickDownColor: '#F23645',
  wickUpColor: '#089981',
  borderVisible: true,
  wickVisible: true,
};


type VolumeSeriesOptions = SeriesOptionsCommon & HistogramStyleOptions

export const volumeSeriesProperties: VolumeSeriesOptions = {
  color: '#26a69a',
  priceFormat: {
    type: 'volume',
    minMove: 0.1,
    precision: 0.1
  },
  priceLineVisible: false,
  priceScaleId: '', // set as an overlay by setting a blank priceScaleId
  base: 0,
  baseLineColor: '#B2B5Be',
  baseLineStyle: 0,
  baseLineWidth: 1,
  title: '',
  lastValueVisible: false,
  visible: true, 
  priceLineColor: '',
  priceLineStyle: 0,
  priceLineWidth: 1,
  baseLineVisible: false, 
  priceLineSource: 0
}
