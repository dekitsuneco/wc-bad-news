class NewsArticle extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  set content({
    url, title, urlToImage, description, publishedAt,
  }) {
    this.root.innerHTML = `
    <style>
      .article {
        display: block;

        padding: 1rem;

        background-color: rgb(249,244,236);
        border: 1.5px solid rgb(225,220,214);
        border-top-width: 0px;
        border-left-width: 0px;
      }

      .article__title {
        font-family: 'Sinterest', 'Helvetica';
      }

      .article__description {
        color: rgb(152,150,146);
        font-size: 1rem;
      }

      .article__author {
        color: rgb(152,150,146);
        font-size: .9rem;
      }

      a,
      a:visited {
        display: block;

        text-decoration: none;
        color: inherit;
      }

      .article__media {
        width: 100%;
      }
    </style>

    <a class='article' href='${url}'>
      <img class='article__media' src='${urlToImage || ''}'>
      <h2 class='article__title'>${title}</h2>
      <p class='article__description'>${description || ''}</p>
      <p class='article__author'>${publishedAt ? new Date('2022-06-08T19:00:10Z').toDateString() : ''}</p>
    </a>
    `;
  }
}

customElements.define('news-article', NewsArticle);
