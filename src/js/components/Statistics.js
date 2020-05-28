export default class Statistics {
    constructor(articles) {
        this.articles = articles;

    }

    //summary section
    createSummary(articles) {
        const summary = document.querySelector('.summary');
        const searchQuery = localStorage.getItem('searchQuery');
        const summaryTotalWeek = articles.length;
        const summaryMentions = this.countMentions(searchQuery);

        summary.insertAdjacentHTML('afterbegin', `
                                  <h1 class="summary__title">Вы спросили: «${searchQuery}»</h1>
                                  <p class="summary__subtitle">Новостей за неделю: ${summaryTotalWeek}</p>
                                  <p class="summary__subtitle">Упоминаний в загаловках: ${summaryMentions}</p>
                                  `);
        return summary;
    }

    addSummary(articles) {
        this.createSummary(articles);
    }

    countMentions(searchQuery) {
        let count = 0;
        const regex = new RegExp(`${searchQuery}`, 'gi');
        this.articles.forEach(el => {
            const keyWordTitle = el.title.match(regex);
            const keyWordDescription = el.description.match(regex);
            count += keyWordTitle && keyWordTitle.length
                // || keyWordDescription && keyWordDescription.length;
        })
        return count;
    }

    //analytics section

    createAnalytics(date, width) {
        const tableData = document.querySelector('.table__data');
        tableData.insertAdjacentHTML('beforeend', `
                                          <p class="analytics__date">${date}</p>
                                          <p class="analytics__bar" style="width: ${width}%;"></p>`);
        return tableData;
    }



    addAnalytics(searchQuery) {
        const dateNow = new Date();
        const week = 7 * 24 * 3600 * 1000;
        const weekAgo = new Date(dateNow - week);
        let sample = {};
        const summaryMentions = this.countMentions(searchQuery);
        for (let i = 0; i < 7; i++) {
            let date = this.dateCurrent(new Date(weekAgo.setDate(weekAgo.getDate() + 1)));
            const width = sample[date] || 0;
            this.createAnalytics(date, width * 100 / summaryMentions); //if null -> width = 0
        }
    }

    countWordAnalytics(searchQuery) {
        let editDate = ''
        articles.forEach(el => {
            const keyWordTitle = el.title.match(regex);
            const keyWordDescription = el.description.match(regex);
            const count = keyWordTitle && keyWordTitle.length
                // + keyWordDescription && keyWordDescription.length;
            editDate = cutDate(el.publishedAt);
            Object.assign(sample, {
                [editDate]: setCount(editDate, count)
            });
        })
    }
    setCount(date, count) {
        if (sample[date]) {
            return sample[date] + count
        } else {
            return count
        }
    }

    cutDate(publishedAt) {
        let date = new Date(publishedAt)
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    dateCurrent(current) {
        return `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    }
}