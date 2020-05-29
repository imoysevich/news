import { commits } from '../commits.js';
import CommitCard from './CommitCard.js';

export default class CommitCardList {
    constructor(cards) {
        this.cards = cards;
        this.arrayCards = [];
        this.commitCard = new CommitCard(commits);
    }

    addCard(commits) {
        this.commitCard.createCard(commits);
    }

    render() {
        commits.forEach((commits) => this.addCard(commits));

    }
}
