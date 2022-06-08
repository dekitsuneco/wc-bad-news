/* eslint-disable no-console */
/* eslint-disable import/extensions */
import './components/NewsArticle.js';
import { topHeadlinesURL } from './api/newsAPI.js';

const fetchArticles = async (url) => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

const renderArticles = (json) => {
  const containerElement = document.querySelector('.articles');

  json.articles.forEach((article) => {
    const articleElement = document.createElement('news-article');
    articleElement.content = article;

    containerElement.appendChild(articleElement);
  });
};

const createNews = async () => {
  const data = await fetchArticles(topHeadlinesURL);
  renderArticles(data);
};

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.error('SW registration failed');
    }
  }
}

window.addEventListener('load', () => {
  createNews();
  registerSW();
});
