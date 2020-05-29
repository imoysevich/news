export default class CommitCard {
    constructor(card) {
        this.card = card;
    }


    getTemplate(card) {
        const monthNames = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
        let date = new Date(card.commit.committer.date);
        const formatDate = (date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear());
        const template = `<div class="carousel-cell">
                      <p class="cards__date_commit">${formatDate}</p>
                      <img class="cards__image_commits" src="${card.author.avatar_url}">
                      <h4 class="cards__title_commits">${card.commit.committer.name}</h4>
                      <p class="cards__email">${card.commit.committer.email}</p>
                      <p class="cards__text cards__text_commits">${card.commit.message}</p>
                      </div>`
        return template;
    }

    createCard(card) {
        const commitCard = document.querySelector('.carousel');
        // const flkty = new Flickity(elem, {
        //     // options
        //     wrapAround: true,
        //     cellAlign: 'left',
        //     contain: true
        // });
        // const commitCard = document.querySelector('.flickity-slider');

        commitCard.insertAdjacentHTML('afterbegin', this.getTemplate(card));
        return commitCard;
    }

    addCard(card) {
        // cards.reverse().slice(-20).map((card) => this.createCard(card));
        this.createCard(card);

    }
}
