import NewsCardList from '../components/NewsCardList.js';

export default class DataStorage {
    constructor(cards) {
        this.cards = cards;
        // this.arrayCards = [];
        this.newsCardList = new NewsCardList();
    }

    // saveData() {
    //     localStorage.setItem('articles', JSON.stringify(articles)); //2nd article is the array that we fetch
    //     JSON.parse(localStorage.getItem('articles')); //to get array from localStorage, converting string to JS object
    // }

    setLocalStorage(data) {
        localStorage.setItem('articles', JSON.stringify(data)); //2nd article is the array that we fetch
        this.newsCardList.addCard(data);
    }

}
