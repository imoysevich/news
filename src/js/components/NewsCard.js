export default class NewsCard {
    constructor(articles) {
        this.articles = articles;
    }

    getTemplate(articles) {
        const template = `<div class="cards__item">
                        <img class="cards__image" src="url(${articles.urlToImage})">
                        <div class="cards__description">
                        <p class="cards__date">${articles.date}</p>
                        <h4 class="cards__title">${articles.title}</h4>
                        <p class="cards__text">${articles.description}</p>
                        </div>
                        <a href="" class="cards__link">
                            <p class="cards__link_name">${articles.sourceName}</p>
                        </a>
                        </div>`
        return template;
    }

    createCard(articles) {
        const cardsItem = document.querySelector('.cards');
        cardsItem.insertAdjacentHTML('afterbegin', this.getTemplate(articles));
        return cardsItem;
    }

    updateCards(articles) {
        return createCard(articles);
    }
}