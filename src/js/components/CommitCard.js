export default class CommitCard {
    constructor(commits) {
        this.commits = commits;
    }

    getTemplate(commits) {
        const template = `<div class="carousel-cell">
                          <p class="cards__date_commit">${commits.date}</p>
                          <img class="cards__image_commits" src="url(${commits.avatar_url})">
                          <h4 class="cards__title_commits">${commits.name}</h4>
                          <p class="cards__email">${commits.email}</p>
                          <p class="cards__text cards__text_commits">${commits.message}</p>
                          </div>`
        return template;
    }

    createCard(commits) {
        const cardsItemCommits = document.querySelector('.main-carousel');
        cardsItemCommits.insertAdjacentHTML('afterbegin', this.getTemplate(commits));
        return cardsItemCommits;
    }

    updateCards(commits) {
        return createCard(commits);
    }
}
