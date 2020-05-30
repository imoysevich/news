export default class Statistics {
    constructor(articles) {
        this.articles = articles;
    }

    //summary section
    createSummary(articles) {
        const summary = document.querySelector('.summary');
        const searchQuery = localStorage.getItem('searchQuery');
        const summaryTotalWeek = articles.length;
        const summaryMentions = this.countSearchQueryTotal(searchQuery);

        summary.insertAdjacentHTML('afterbegin', `
                                  <h1 class="summary__title">Вы спросили: «${searchQuery}»</h1>
                                  <p class="summary__subtitle">Новостей за неделю: ${summaryTotalWeek}</p>
                                  <p class="summary__subtitle">Упоминаний в загаловках: ${summaryMentions}</p>
                                  `);
        return summary;
    }

    countSearchQueryTotal(searchQuery) {
        let counter = 0;
        const regex = new RegExp(`${searchQuery}`, 'gi');

        this.articles.forEach(element => {
            const queryTitle = element.title && element.title.match(regex);
            const queryDescription = element.description && element.description.match(regex);
            if (queryTitle) {
                counter += queryTitle.length
            }
            if (queryDescription) {
                counter += queryDescription.length;
            }

        })
        return counter;
    }

    //analytics section
    createAnalytics(date, width) {
        const weekday = new Array('вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб');
        let dateN = new Date(date);
        const formatDate = (dateN.getDate() + ", " + weekday[dateN.getDay()]);

        const tableData = document.querySelector('.table__data');
        tableData.insertAdjacentHTML('beforeend', `
                                          <p class="analytics__date">${formatDate}</p>
                                          <p class="analytics__bar" style="width: ${width}%;"></p>`);
        return tableData;
    }

    addAnalytics() {
        const dateNow = new Date();
        const week = 7 * 24 * 3600 * 1000;
        const weekAgo = new Date(dateNow - week);
        const searchQuery = localStorage.getItem('searchQuery');
        const sample = this.countSearchQueryByDate(searchQuery);
        const summaryMentions = this.countSearchQueryTotal(searchQuery);

        for (let i = 0; i < 7; i++) {
            let date = this.setTableDate(new Date(weekAgo.setDate(weekAgo.getDate() + 1)));

            const width = sample[date] || 0;
            this.createAnalytics(date, (width * 100 / summaryMentions));
        }
    }

    setTableDate(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }


    countSearchQueryByDate(searchQuery) {
        const regex = new RegExp(`${searchQuery}`, 'gi');
        let sample = {};

        this.articles.forEach(element => {
            let counter = 0;
            const queryTitle = element.title && element.title.match(regex);
            const queryDescription = element.description && element.description.match(regex);
            if (queryTitle) {
                counter += queryTitle.length;
            }
            if (queryDescription) {
                counter += queryDescription.length;
            }

            let editDate = this.cutDate(element.publishedAt);
            Object.assign(sample, {
                [editDate]: this.setCount(sample, editDate, counter)
            });
        })
        return sample;
    }

    cutDate(publishedAt) {
        let date = new Date(publishedAt);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    setCount(sample, date, counter) {
        if (sample[date]) {
            return sample[date] + counter
        } else {
            return counter
        }
    }
}
