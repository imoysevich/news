import NewsCard from './NewsCard.js';

export default class NewsCardList {
    constructor(cards) {
        this.cards = cards;
        this.newsCard = new NewsCard();
    }

    addCard(articles) {
        this.newsCard.createCard(articles);
    }


}
