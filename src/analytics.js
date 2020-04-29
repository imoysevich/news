import "./analytics.css";

import './images/favicon.png';
import './images/fb.png';
import './images/github.png';

(function() {
    const analytics = [
        ["19, пн", '15'],
        ["20, вт", '18'],
        ["21, ср", '11'],
        ["22, чт", '39'],
        ["23, пт", '45'],
        ["24, сб", '73'],
        ["25, вс", '34']
    ];

    (function(document) {
        const bars = [].slice.call(document.querySelectorAll('.analytics__bar'));
        bars.map(function(bar, index) {
            setTimeout(function() {
                bar.style.width = analytics[index][1] + "%";
                bar.textContent = analytics[index][1];
            }, index * 0);
        });
        const dates = [].slice.call(document.querySelectorAll('.analytics__date'));
        dates.map(function(date, index) {
            setTimeout(function() {
                date.textContent = analytics[index][0];
            }, index * 0);
        });
    })
    (document)
}());