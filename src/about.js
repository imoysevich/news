import './about.css';

const Flickity = require('flickity');
import CommitCards from './js/components/CommitCards.js';
import GithubApi from './js/modules/GithubApi.js';

import './images/favicon.png';
import './images/path_05.png';
import './images/image-03.png';
import './images/in.png';
import './images/github.png';
import './images/html.png';
import './images/css.png';
import './images/js.png';
import './images/webpack.png';

(function() {
    setTimeout(() => {
        const slider = new Flickity('.carousel', {
            groupCells: true,
            cellAlign: 'left',
            contain: true,

        });
    }, 500);

    const commitCards = new CommitCards();

    const githubApi = new GithubApi({
        baseUrl: 'https://api.github.com/repos/imoysevich/news/commits',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    githubApi.getCommitCard()
        .then((commits) => {
            commitCards.render(commits);
        })
        .catch((err) => console.log(err));
}());

///////////////////////////////////////////////////////////////////////////////////////////////////
/*
gitHubApi.getGitInfo()

//после полученеия результата запроса формируем массив полученных данных
.then((res) => {
    res.forEach(element => {
        arrayWithCommits.push(commitCard.commitsObject(element));
    })
})

//затем проходимся по этому массиву и создаем DOM-элемент, в этот элемент кладем карточку
.then(() => {
    arrayWithCommits.forEach((elem) => {
        const cell = document.createElement('div');
        commitCardList.pushCard(cell, elem);

        // формиуруем контейнер с готовыми карточками
        cellElems.push(cell);
    })
})

//передаем этот контейнер в fikty для формирования карусели
.then(function() {
        flkty.append(cellElems)
    })
    .catch((err) => {
        console.log(err)
    })


const flkty = new Flickity('.main-carousel', {
    initialIndex: 4,
    cellAlign: 'left'
});
*/
