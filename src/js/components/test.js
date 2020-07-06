const Flickity = require('flickity');

export default class CommitCards {
    constructor(commits) {
        this.commits = commits;
    }

    flickity(card) {
            var flkty = new Flickity('.carousel', {
                groupCells: true,
                cellAlign: 'left',
                contain: true,
            });

            // var appendButton = document.querySelector('.button--append');
            // appendButton.addEventListener('click',
            // function() {
            var cellElems = [this.getTemplate(card)];
            flkty.append(cellElems);
            this.updateCard(card);

            // return flickity;
            // });
        }
        // var cellCount = flkty.cells.length;

    // function makeCell() {
    //     cellCount++;
    //     var cell = document.createElement('div');
    //     cell.className = 'carousel-cell';
    //     cell.textContent = cellCount;
    //     return cell;
    // }


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
        commitCard.insertAdjacentHTML('afterbegin', this.getTemplate(card));
        return this.flickity();
        // this.flickity()
        // const slider = new Flickity('.flickity', {
        //     groupCells: true,
        //     cellAlign: 'left',
        //     contain: true,

        // });
        // slider.insertAdjacentHTML('afterbegin', this.getTemplate(card));

    }

    // flickity(cards) {
    //         const commitCard = document.querySelector('.carousel');

    //         const slider = new Flickity('.carousel', {
    //             groupCells: true,
    //             cellAlign: 'left',
    //             contain: true,

    //         });
    //         return slider;
    //     }
    updateCard(card) {
        return this.createCard(card);
    }

    // addCard(card) {
    //     const commitCard = document.querySelector('.carousel');
    //     commitCard.appendChild(this.updateCard(card));
    //     this.updateCard(card);
    //     // this.createCard(card);

    // }

    render(commits) {
        commits.reverse().slice(-20).map((card) => this.flickity(card));
    }
}



// const Flickity = require('flickity');

export default class CommitCards {
    constructor(commits) {
        this.commits = commits;
    }

    //прорисовка карточки
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

    //помещение карточки в карусель
    createCard(card) {
        const commitCards = document.querySelector('.carousel');
        commitCards.insertAdjacentHTML('afterbegin', this.getTemplate(card));
    }

    updateCard(card) {
        return this.createCard(card);
    }

    addCard(card) {
        const commitCards = document.querySelector('.carousel');
        commitCards.append(this.updateCard(card));
        this.updateCard(card);
    }

    render(commits) {
        commits.reverse().slice(-20).map((card) => this.addCard(card));
    }
}
