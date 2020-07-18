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
            document.querySelector('.isLoading').style.display = 'block';
        } else {
            document.querySelector('.isLoading').style.display = 'none';
        }
    }

    setSubmitButtonState() {
        event.preventDefault();
        this.resetResults();
        this.renderLoading(true);
        this.newsApi.getNewsCard()

        .then((data) => {
                if (data.articles.length > 0) {
                    const searchInput = document.querySelector('.search__input');
                    localStorage.setItem('searchQuery', searchInput.value);

                    let articles = data.articles;
                    let articlesJSON = JSON.stringify(articles);
                    localStorage.setItem('articles', articlesJSON);
                    let articlesObj = JSON.parse(articlesJSON);

                    const newsCards = new NewsCards(articlesObj);
                    newsCards.render();

                    document.querySelector('.results__found').style.display = 'block';
                }
                if (data.articles.length == 0) {
                    document.querySelector('.results__notFound').style.display = 'block';
                }
            })
            .catch((err) => {
                document.querySelector('.results__error').style.display = 'block';
            })
            .finally((res) => {
                this.renderLoading(false);

            })
    }

    inputEditHandler() {
        const buttonSearch = document.querySelector('.button__search');
        const input = document.querySelector('.search__input');

        if (input.value.length >= 1) {
            buttonSearch.removeAttribute('disabled');
            buttonSearch.classList.remove('button__disabled');
        } else {
            buttonSearch.setAttribute('disabled', true);
            buttonSearch.classList.add('button__disabled');
        }
    }

    resetResults(element) {
        document.querySelector('.results__container').style.display = 'none';
        document.querySelector('.results__found').style.display = 'none';
    }
}
