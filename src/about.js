import './about.css';

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
            authorization: '06c4d3725c27b7fb65e843f094d1b7b609b8fcdb',
            'Content-Type': 'application/json'
        }
    });

    githubApi.getCommitCard()
        .then((commit) => {
            commit.reverse().slice(-20).map((element) => commitCardList.addCard(element));
        })
        .catch((err) => console.log(err));
}());
