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

    addSummary(articles) {
        this.createSummary(articles);
    }

    countSearchQueryTotal(searchQuery) {
        let counter = 0;
        const regex = new RegExp(`${searchQuery}`, 'gi');

        this.articles.forEach(element => {
            const queryTitle = element.title;
            const queryDescription = element.description;
            if (element.title === undefined || element.title === null || element.description === undefined || element.description === null) { //
                return;
            } {
                element.title.match(regex);
                element.description.match(regex);
            }
            if (queryTitle === undefined || queryTitle === null || queryDescription === undefined || queryDescription === null) { //
                return;
            } {
                counter += queryTitle.length + queryDescription.length;
            }

        })
        return counter;
    }

    //analytics section
    createAnalytics(date, width) {
        // const dateTable = new Date(date);

        // const weekday = new Array('вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб');
        // return `${date.getDate()}` + ', ' + `${weekday[date.getDay()]}`;
        const tableData = document.querySelector('.table__data');
        tableData.insertAdjacentHTML('beforeend', `
                                          <p class="analytics__date">${date}</p>
                                          <p class="analytics__bar" style="width: ${width}%;"></p>`);
        return tableData;
    }

    addAnalytics() { // данные для прорисовки таблицы
        const dateNow = new Date();
        const week = 7 * 24 * 3600 * 1000;
        const weekAgo = new Date(dateNow - week);
        // let sample = {};
        let sample = sample[editDate]; //объект не формируется
        const summaryMentions = this.countSearchQueryTotal(this.searchQuery);
        for (let i = 0; i < 7; i++) {
            let date = this.setTableDate(new Date(weekAgo.setDate(weekAgo.getDate() + 1))); //SET DATES

            const width = sample || 0;
            // const width = sample[editDate] || 0;
            //this.countSearchQueryByDate(sample[editDate] || 0); //sample не прочитывается countSearchQueryByDate
            this.createAnalytics(date, (width * 100 / summaryMentions)); //WORKS
        }
    }

    // evolution(obj, key, value) { //key = date, value = counter -> counter = mentions per day & day = date
    //     const arrayObj = {
    //         title: "икра",
    //         description: 2,
    //         publishedAt: "вода"
    //     };

    //     const arrayNewObj = evolution(arrayObj, 'counter', function); //что за фукция??????
    //     console.log('sample:', arrayNewObj); // 'sample:' {title: "икра", description: 2, publishedAt: "вода", counter: function}
    //     //
    //     obj = Object.assign({}, obj);
    //     obj[key] = value;
    //     return obj;

    // }

    // const fish = {
    //   eggs: "икра",
    //   eyes: 2,
    //   home: "вода"
    // };


    // const frog = evolution(fish, 'legs', 4);

    // console.log("лягушка: ", frog); // лягушка: {eggs: "икра", eyes: 2, home: "вода", legs: 4}
    // console.log("рыба: ", fish); //рыба: {eggs: "икра", eyes: 2, home: "вода", legs: 4}
    /* рыбы тоже изменились!*/

    setTableDate(date) { //SET DATES
        // const weekday = new Array('вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб');
        // return `${date.getDate()}` + ', ' + `${weekday[date.getDay()]}`;
        // let date = new Date(publishedAt)
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }


    countSearchQueryByDate(searchQuery) { // куда-то нужно положить функцию
        // let editDate = '';
        const regex = new RegExp(`${searchQuery}`, 'gi');
        let sample = {};
        let date = new Date(this.articles.publishedAt);
        let counter = 0;


        this.articles.forEach(element => {
            const queryTitle = element.title;
            const queryDescription = element.description;
            if (element.title === undefined || element.title === null || element.description === undefined || element.description === null) {
                return;
            } {
                element.title.match(regex);
                element.description.match(regex);
            }
            if (queryTitle === undefined || queryTitle === null || queryDescription === undefined || queryDescription === null) {
                return;
            } {
                // let dateNew = new Date(publishedAt);
                // Object.assign(sample, { //создали объект sample
                //     [date]: this.setAnalyticsCounter(date, counter) //создали ключ
                let editDate = this.cutDate(element.publishedAt);

                const newObj = Object.assign({}, );
                Object.assign(sample, {
                    [editDate]: this.setCount(editDate, counter)

                });
                console.log(sample[editDate])
            }
            console.log(sample[editDate])
        })
    }
    cutDate(publishedAt) {
        let date = new Date(publishedAt)
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    setCount(date, counter) {
        // let sample = {};

        if (sample[date]) {
            return sample[date] + counter
        } else {
            return counter
        }
        // return sample[date] ? sample[date] + count : count
    }
}