import './analytics.css';

import Statistics from './js/components/Statistics.js'

import './images/favicon.png';
import './images/fb.png';
import './images/github.png';

(function() {

    const articles = JSON.parse(localStorage.getItem('articles'));
    const statistics = new Statistics(articles);
    statistics.addSummary(articles);
    statistics.addAnalytics(articles);
    // statistics.countSearchQueryByDate();
}());