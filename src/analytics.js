import './analytics.css';

import Statistics from './js/components/Statistics.js'

import './images/favicon.png';
import './images/in.png';
import './images/github.png';

(function() {
    const articles = JSON.parse(localStorage.getItem('articles'));
    const statistics = new Statistics(articles);
    statistics.createSummary(articles);
    statistics.addAnalytics(articles);
}());
