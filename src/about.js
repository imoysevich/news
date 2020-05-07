import './about.css';

// import Flickity from '../node_modules/flickity/js/flickity.js';
const Flickity = require('flickity');
// const flkty = new Flickity('.carousel', {
//     // options
//     cellAlign: 'left',
//     contain: true
// });
import CommitCardList from './js/components/CommitCardList.js';
import GithubApi from './js/modules/GithubApi.js';

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
    const commitCardList = new CommitCardList();

    const githubApi = new GithubApi({
        baseUrl: 'https://api.github.com/repos/imoysevich/news/commits',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    githubApi.getCommitCard()
        .then((commit) => {
            commit.reverse().slice(-20).map((element) => commitCardList.addCard(element));
        })
        .catch((err) => console.log(err));
}());
