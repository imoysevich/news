export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getNewsCard() {
        const searchInput = document.querySelector('.search__input');

        const dateNow = new Date();
        const week = 7 * 24 * 3600 * 1000;
        const weekAgo = new Date(dateNow - week);
        const dateTo = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
        const dateFrom = `${weekAgo.getFullYear()}-${weekAgo.getMonth() + 1}-${weekAgo.getDate()}`;
        const searchQuery = searchInput.value;
        // const urlNewsApi = 'https://newsapi.org/v2/everything?sortBy=popularity&language=ru&pageSize=100'
        const urlNewsApi = 'https://praktikum.tk/news/v2/everything?sortBy=popularity&language=ru&pageSize=100'

        const urlQuery = `${urlNewsApi}&q=${searchQuery}&from=${dateFrom}&to=${dateTo}`;

        // const serverUrl = NODE_ENV === "development" ? "http://praktikum.tk/cohort7" : "https://praktikum.tk/cohort7";
        // const api = new Api({
        //     baseUrl: serverUrl,
        //     headers: {
        //         authorization: '6f6ef78e-9a11-4731-8716-e6c213c6ad6a',
        //         'Content-Type': 'application/json'
        //     }
        // });

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
