import NewsApi from '../modules/NewsApi.js';
import DataStorage from '../modules/DataStorage.js';

export default class SearchInput {
    constructor(element) {
        this.element = element;
        const dataStorage = new DataStorage();
        this.dataStorage = dataStorage;
        const searchform = document.forms.searchform;
        const newsApi = new NewsApi();
        this.newsApi = newsApi;

        // const userInfo = new UserInfo('.profile');
        // this.userInfo = userInfo;
        searchform.addEventListener('input', this.inputEditHandler.bind(this));
        searchform.addEventListener('submit', this.setSubmitButtonState.bind(this));
    }
    renderLoading(isLoading) {
        if (isLoading) {
            document.querySelector('.isLoading').style.display = 'initial';
        } else {
            document.querySelector('.isLoading').style.display = 'none';
        }
    }

    setSubmitButtonState(input) {
        event.preventDefault();
        this.renderLoading(true);
        this.newsApi.getNewsCard()
            .then((data) => {
                if (data.articles.length > 0) {
                    data.articles.slice(-3).map((element) => this.dataStorage.setLocalStorage(element));
                    document.querySelector('.results__found').style.display = 'initial';
                }
                if (data.articles.length == 0) {
                    document.querySelector('.results__notFound').style.display = 'initial';
                }
            })
            .catch((err) => {
                document.querySelector('.results__error').style.display = 'initial';
            })
            .finally((res) => {
                this.renderLoading(false);
            })

    }

    inputEditHandler() {
        const buttonSearch = document.querySelector('.button__search');

        if ((input) => this.checkInputValidity(input)) {
            buttonSearch.removeAttribute('disabled');
            buttonSearch.classList.remove('button__disabled');
        } else {
            buttonSearch.setAttribute('disabled', true);
            buttonSearch.classList.add('button__disabled');
        }
    }

}
