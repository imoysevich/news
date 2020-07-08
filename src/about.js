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
    const cardsContainer = document.querySelector('.cards__container');
    let arrayWithCommits = [];

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
