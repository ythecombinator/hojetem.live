import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

import {filterRequests, interceptRequests, parseResponse} from 'utils/puppeteer';

import {Live} from 'schemas/api';
import {Category, Event} from 'schemas/raw-api';

import {endpoints} from 'config/constants';

// Utils

const mapCategories = (category: Category) => {
  const { key, name } = category;

  return {
    id: key,
    title: name,
  };
};

const getBannerUrl = (videoId: string, originalBanner: string) => {
  const isValid = originalBanner === endpoints.assets;

  return isValid
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : originalBanner;
};

const transformResponse = (rawResponse: Event[]) => {
  const response = rawResponse.map((item) => {
    const {
      id,
      title,
      datetime,
      artists,
      youtube_video,
      youtube_channel,
      banner,
      instagram,
      active,
      categories,
    } = item;

    const newItem = {
      id,
      title,
      datetime,
      genres: categories.map(mapCategories),
      artists,
      banner: getBannerUrl(youtube_video, banner),
      active,
      youtubeVideo: youtube_video,
      youtubeChannel: youtube_channel,
      instagram,
    };

    return newItem;
  });

  return response as Live[];
};

// Exported

export const getBaseData = async () => {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });

  const page = await browser.newPage();

  const interceptedRequests = await interceptRequests(page, endpoints.base);
  const filteredRequests = await filterRequests(
    interceptedRequests,
    endpoints.api
  );
  const rawResponse = parseResponse<Event[]>(filteredRequests);
  const response = transformResponse(rawResponse);

  await browser.close();

  return response;
};
