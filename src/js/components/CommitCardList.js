// import { commits } from '../commits.js';
import CommitCard from './CommitCard.js';

export default class CommitCardList {
    constructor(commit) {
        this.commit = commit;
        // this.arrayCards = [];
        this.commitCard = new CommitCard();
    }

    addCard(commit) {
        this.commitCard.createCard(commit);
    }

    // render(commit) {
    //     [].forEach((element) => this.addCard(element));

    // }

}
