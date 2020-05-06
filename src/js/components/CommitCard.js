export default class CommitCard {
    constructor(cards) {
        this.cards = cards;
    }

    getTemplate(cards) {
        const monthNames = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
        let date = new Date(cards.commit.committer.date);
        const formatDate = (date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear());
        const template = `<div class="carousel-cell">
                      <p class="cards__date_commit">${formatDate}</p>
                      <img class="cards__image_commits" src="${cards.author.avatar_url}">
                      <h4 class="cards__title_commits">${cards.commit.committer.name}</h4>
                      <p class="cards__email">${cards.commit.committer.email}</p>
                      <p class="cards__text cards__text_commits">${cards.commit.message}</p>
                      </div>`
        return template;
    }

    createCard(cards) {
        const cardsItemCommits = document.querySelector('.carousel');
        cardsItemCommits.insertAdjacentHTML('afterbegin', this.getTemplate(cards));
        return cardsItemCommits;
    }

    // updateCards(commits) {
    //     return createCard(commits);
    // }
}
