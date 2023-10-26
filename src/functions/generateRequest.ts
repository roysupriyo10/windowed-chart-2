import { baseUrls, binanceMode } from "@/constants";

type RequestMethod = 'GET' | 'POST';

interface QueryParameters {
  [key: string]: any
}

interface RequestOptions {
  method: RequestMethod;
  headers: Record<string, string>;
  queryParams?: QueryParameters;
  body?: string | FormData | null;
}

async function generateRequest<T>(parameters: {
  route: string,
  method: RequestMethod,
  body?: Record<string, any> | null,
  queryParams?: QueryParameters
}): Promise<T> {
  const headers: Record<string, string> = {
    'Binance-Mode': binanceMode
  };

  const {
    route,
    method,
    body,
    queryParams
  } = parameters

  const options: RequestOptions = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  let query: string = '';

  if (queryParams) {
    query = new URLSearchParams(queryParams).toString();
  }

  try {
    const response = await fetch(`${baseUrls.fapi}${route}${queryParams && `?${query}`}`, options);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Request error: ${error}`);
  }
}

export {
  generateRequest
}
