import "./analytics.css";

import './images/favicon.png';
import './images/fb.png';
import './images/github.png';

//this part will be rearranged when api will be done
// (function() {
//     const data = [
//         { date: "19, пн", count: '15' },
//         { date: "20, вт", count: '46' },
//         { date: "21, ср", count: '28' },
//         { date: "22, чт", count: '53' },
//         { date: "23, пт", count: '5' },
//         { date: "24, сб", count: '79' },
//         { date: "25, вс", count: '43' }
//     ];
//     const analytics = [
//         ["19, пн", '15'],
//         ["20, вт", '18'],
//         ["21, ср", '11'],
//         ["22, чт", '39'],
//         ["23, пт", '45'],
//         ["24, сб", '73'],
//         ["25, вс", '34']
//     ];

//     (function(document) {
//         const bars = [].slice.call(document.querySelectorAll('.analytics__bar'));
//         bars.map(function(bar, index) {
//             setTimeout(function() {
//                 bar.style.width = analytics[index][1] + "%";
//                 bar.textContent = analytics[index][1];
//             }, index * 0);
//         });
//         const dates = [].slice.call(document.querySelectorAll('.analytics__date'));
//         dates.map(function(date, index) {
//             setTimeout(function() {
//                 date.textContent = analytics[index][0];
//             }, index * 0);
//         });
//     })
//     (document)
// }());
