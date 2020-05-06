export default class GithubApi {
    constructor(options) {
        this.options = options;
    }

    getCommitCard() {
        return fetch(`${this.options.baseUrl}`, {
                headers: this.options.headers
            })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
    }
}
