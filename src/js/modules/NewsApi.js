export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getNewsCard() {
        const searchInput = document.querySelector('.search__input');

        const dateCurrent = new Date();
        const lastWeek = new Date(dateCurrent - (7 * 24 * 3600 * 1000));
        const dateTo = `${dateCurrent.getFullYear()}-${dateCurrent.getMonth() + 1}-${dateCurrent.getDate()}`;
        const dateFrom = `${lastWeek.getFullYear()}-${lastWeek.getMonth() + 1}-${lastWeek.getDate()}`;

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
