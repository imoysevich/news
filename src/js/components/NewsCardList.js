import { articles } from '../articles.js';
import NewsCard from './NewsCard.js';

export default class NewsCardList {
    constructor(cards) {
        this.cards = cards;
        this.arrayCards = [];
        this.card = new NewsCard(articles);
    }

    addCard(articles) {
        this.card.createCard(articles);
    }

    render() {
        articles.forEach((articles) => this.addCard(articles));

    }
}
