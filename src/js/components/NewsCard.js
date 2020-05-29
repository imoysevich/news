export default class NewsCard {
    constructor(cards) {
        this.cards = cards;
    }

    getTemplate(articles) {
        const monthTitles = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
        let date = new Date(articles.publishedAt);
        const formatedDate = (date.getDate() + " " + monthTitles[date.getMonth()] + ", " + date.getFullYear());
        const template = `<div class="cards__item">
                    <img class="cards__image" src="${articles.urlToImage}">
                    <div class="cards__description">
                    <p class="cards__date">${formatedDate}</p>
                    <h4 class="cards__title">${articles.title}</h4>
                    <p class="cards__text">${articles.description}</p>
                    </div>
                    <a href="" class="cards__link">
                        <p class="cards__link_name">${articles.source.name}</p>
                    </a>
                    </div>`
        return template;
    }

    createCard(cards) {
        const cardsItem = document.querySelector('.cards');
        cardsItem.insertAdjacentHTML('afterbegin', this.getTemplate(cards));
        return cardsItem;
    }
}
