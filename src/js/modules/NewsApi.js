export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getNewsCard() {
        // let loader = document.querySelector('.loader');
        // loader.style.display = 'none';

        const searchInput = document.querySelector('.search__input');
        localStorage.setItem('searchQuery', searchInput.value);

        //edit block
        const dateNow = new Date();
        const week = 7 * 24 * 3600 * 1000;
        const weekAgo = new Date(dateNow - week);
        const dateTo = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
        const dateFrom = `${weekAgo.getFullYear()}-${weekAgo.getMonth() + 1}-${weekAgo.getDate()}`;
        const searchQuery = searchInput.value;
        const urlNewsApi = 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?sortBy=popularity&language=ru&pageSize=100' //delete cors
        const urlQuery = `${urlNewsApi}&q=${searchQuery}&from=${dateFrom}&to=${dateTo}`;

        return fetch(`${urlQuery}`, {
                headers: {
                    authorization: 'd2ef23de7a0b40bc824b0736658233ff',
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
    }

}