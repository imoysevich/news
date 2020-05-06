export const commits = [{
    name: 'Антон Долинин',
    email: 'anton@yandex.ru',
    date: '2 августа, 2019',
    message: 'Emmet (formerly Zen Coding) is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow.',
    avatar_url: 'https://avatars0.githubusercontent.com/u/56126844?s=460&u=6ec9cfc5db2915ed6d651a871749cdad252b08a5&v=4'
}];

function createObj(param) {
    param.name;
    param.date;
    param.email;
    param.message;
    param.avatar_url;
}

createObj(commits)
