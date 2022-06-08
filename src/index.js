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

window.addEventListener('load', () => {
  createNews();
});
