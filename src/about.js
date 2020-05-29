// import './about.css';

// const Flickity = require('flickity');
// import CommitCardList from './js/components/CommitCardList.js';
// import GithubApi from './js/modules/GithubApi.js';

// import './images/favicon.png';
// import './images/path_05.png';
// import './images/image-03.png';
// import './images/fb.png';
// import './images/github.png';
// import './images/html.png';
// import './images/css.png';
// import './images/js.png';
// import './images/webpack.png';

// (function() {
//     const commitCardList = new CommitCardList();
//     const container = '';
//     const cards = [];
//     commitCardList.render(container, cards);

//     const githubApi = new GithubApi({
//         baseUrl: 'https://api.github.com/repos/imoysevich/news/commits',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     githubApi.getCommitCard()
//         .then((data) => {
//             commitCardList.render(data);
//         })
//         .catch((err) => console.log(err));
// }());

import './about.css';

// const Flickity = require('flickity');

import CommitCards from './js/components/CommitCards.js';
import GithubApi from './js/modules/GithubApi.js';
// import Flickity from '../node_modules/flickity/js/flickity.js';

import './images/favicon.png';
import './images/path_05.png';
import './images/image-03.png';
import './images/fb.png';
import './images/github.png';
import './images/html.png';
import './images/css.png';
import './images/js.png';
import './images/webpack.png';

(function() {
    // const flickity = new Flickity();
    // const Flickity = require('flickity');
    // const Flickity = require('flickity');
    // const elem = document.querySelector('carousel');
    // const flkty = new Flickity(elem, {
    //     // options
    //     wrapAround: true,
    //     cellAlign: 'left',
    //     // contain: true
    // });

    const commitCards = new CommitCards();

    const githubApi = new GithubApi({
        baseUrl: 'https://api.github.com/repos/imoysevich/news/commits',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    githubApi.getCommitCard()
        .then((commits) => {
            commits.reverse().slice(-20).map((element) => commitCards.addCard(element));
        })
        .catch((err) => console.log(err));
}());
