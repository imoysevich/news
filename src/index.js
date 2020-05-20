import "./index.css";

import NewsCardList from './js/components/NewsCardList.js';
import NewsApi from './js/modules/NewsApi.js';
import SearchInput from './js/components/SearchInput.js';
import DataStorage from './js/modules/DataStorage.js';

import './images/favicon.png';
import './images/path_05.png';
import './images/image-03.png';
import './images/fb.png';
import './images/not-found_v1.png';
import './images/github.png';

(function() {
    // const dataStorage = new DataStorage(newsCardList);
    const newsCardList = new NewsCardList();
    // const container = '';
    // const cards = [];
    // newsCardList.render(container, cards);
    const dataStorage = new DataStorage();
    const search = new SearchInput();

    const newsApi = new NewsApi();
    //     baseUrl: 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?' +
    //         'q=Apple&' +
    //         'from=2020-05-07&' +
    //         'sortBy=popularity&' +
    //         'apiKey=d2ef23de7a0b40bc824b0736658233ff',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    // // newsApi.getNewsCard() //массив загружает, но не выводит карточки. почему?
    // //     .then((articles) => {
    // //         articles.slice(2).map((element) => newsCardList.addCard(element));
    // //     })
    // //     .catch((err) => console.log(err));

}());
