import { ChartData, MyResponseType, RESOLUTION } from "@/@types";
import { getErrorMessage } from "./getErrorMessage";
import { generateRequest } from "@/functions";

const fetchCandles = async (timeFrame: RESOLUTION, limit: number = 4600) => {
  try {
    const response: MyResponseType = await generateRequest({
      route: '/candles/all',
      method: "GET",
      queryParams: {
        limit: `${limit}`,
        timeFrame: timeFrame
      }
    })

    return response.data as ChartData;
  }
  catch (error) {
    reportError({ message: getErrorMessage(error) });
  }
}

export {
  fetchCandles
}
