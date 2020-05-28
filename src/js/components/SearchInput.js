import NewsApi from '../modules/NewsApi.js';
import NewsCards from './NewsCards.js';

export default class SearchInput {
    constructor(element) {
        this.element = element;
        const searchform = document.forms.searchform;
        this.newsApi = new NewsApi();
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
                    const articles = data.articles;

                    const articlesJSON = JSON.stringify(articles);
                    localStorage.setItem('articles', articlesJSON);

                    const articlesObj = JSON.parse(articlesJSON);

                    const newsCards = new NewsCards(articlesObj);
                    newsCards.render();

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