import {Page, Response} from 'puppeteer-core';

import {Request as ApiRequest} from 'schemas/raw-api';

// Typings

type PuppeteerRequestExecution = () => Promise<void>;

type PuppeteerRequest = {
  url: string;
  response: Response | null;
};

// Exported API

export const interceptRequests = async (page: Page, url: string) => {
  const results = [] as PuppeteerRequest[];

  let paused = false;
  let pausedRequests = [] as PuppeteerRequestExecution[];

  const nextRequest = () => {
    if (pausedRequests.length === 0) {
      paused = false;
    } else {
      pausedRequests.shift()!();
    }
  };

  await page.setRequestInterception(true);

  page.on("request", (request) => {
    if (
      request.resourceType() !== "document" &&
      request.resourceType() !== "script" &&
      request.resourceType() !== "fetch"
    ) {
      request.abort();
    } else if (paused) {
      pausedRequests.push(() => request.continue());
    } else {
      paused = true;
      request.continue();
    }
  });

  page.on("requestfinished", async (request) => {
    const response = await request.response();

    const information = {
      url: request.url(),
      response,
    };

    results.push(information);

    nextRequest();
  });

  page.on("requestfailed", () => {
    nextRequest();
  });

  await page.goto(url, { waitUntil: "networkidle0" });

  return results;
};

export const filterRequests = (
  requests: PuppeteerRequest[],
  matchingUrl: string
) => {
  const apiRequests = requests.filter((request) => {
    return request.url === matchingUrl;
  });

  const formattedApiRequests = Promise.all(
    apiRequests.map(async (request) => {
      const body = await request.response!.json();

      return {
        url: request.url,
        body,
      };
    })
  );

  return formattedApiRequests as Promise<ApiRequest[]>;
};

export const parseResponse = <T>(requests: ApiRequest[]) => {
  const request = requests[0];
  const response = request.body;
  return response as T;
};
