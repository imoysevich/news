import './about.css';

// import './vendor/flickity.pkgd.js';
import CommitCardList from './js/components/CommitCardList.js';

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


}());
