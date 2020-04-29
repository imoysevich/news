import './about.css';

// import * as Flickity from './vendor/flickity.pkgd.js'; //errors but horizontal but no arrows or dots but without the line, the compile is successfull
const Flickity = require('flickity');
import CommitCardList from './js/components/CommitCardList.js';

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
    const container = '';
    const cards = [];
    commitCardList.render(container, cards);

    // const flkty = new Flickity('.carousel');
    // flkty.next();
    // flkty.select(3);
}());
