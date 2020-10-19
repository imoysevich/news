export default class NewsCards {
    constructor(articlesObj) {
        this.cards = [];
        this.articlesObj = articlesObj;
        const button = document.querySelector('.button__more');
        this.button = button;
        button.addEventListener('click', this.setButtonMore.bind(this));
    }

    getTemplate(card) {
        const monthNames = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');
        let date = new Date(card.publishedAt);
        const formatDate = (date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear());

        const template = `<div class="cards__item">
                            <img class="cards__image" src="${card.urlToImage}">
                            <a href="${card.url}" class="cards__link">
                            <div class="cards__description">
                            <p class="cards__date">${formatDate}</p>
                            <h4 class="cards__title">${card.title}</h4>
                            <p class="cards__text">${card.description}</p>
                            </div>
                            <p class="cards__link_name">${card.source.name}</p>
                            </a>
                            </div>`
        return template;
    }

    createCard(card) {
        const newsCards = document.querySelector('.cards');
        newsCards.insertAdjacentHTML('beforeend', this.getTemplate(card));
        return newsCards;
    }

    addCard(cards) {
        cards.forEach((card) => this.createCard(card));
    }

    render() {
        this.cards = [];
        for (let i = 0; i < 3; i++) {
            if (this.articlesObj.length) {
                this.cards.push(this.articlesObj.shift());
            } else {
                this.button.classList.add('hidden');
            }
        }
        this.addCard(this.cards);
    }

    setButtonMore(event) {
        if (event.target.classList.contains('button__more')) {
            this.render();
        }
    }
}
