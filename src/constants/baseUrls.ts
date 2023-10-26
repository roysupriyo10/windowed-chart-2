import { binanceMode } from "./binanceMode";

export const baseUrls = {
  fapi: import.meta.url.split('//')[1].slice(0, 9) === 'localhost' ? 'http://localhost:3060' : 'http://192.168.29.134:3060',
  wss: binanceMode === 'live' ? 'wss://fstream.binance.com/ws' : 'wss://stream.binancefuture.com/ws'
}
