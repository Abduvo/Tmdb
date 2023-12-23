var main_url = 'https://api.themoviedb.org/3';
const img_url = 'https://image.tmdb.org/t/p/w200';
const api = 'api_key=a9d0c458a5571d93fb3c1bc190334abf';

var filter_angel = document.querySelector('.filter_angel')
var filter_down_angel = document.querySelector('.filter_down_angel')
var filter = document.querySelector('.filter')
var watch = document.querySelector('.results')
var watch_ange = document.querySelector('.watch_angel')
var watch_down = document.querySelector('.watch_down')

// 
const rated = main_url  + '/movie/top_rated?'+ api;
const playing = main_url  + '/movie/upcoming?'+ api;

function playin() {
    fetch(playing).then(res => res.json()).then(playingdata => {
    console.log(playingdata);
    now_playing(playingdata.results)
    console.log('sss');
})
}
playin()

var playing_now = document.querySelector('.playing_now')

function now_playing(playingdata) {
    for (let i = 0; i < playingdata.length; i++) {
        const {title, poster_path, vote_average, release_date} = playingdata[i];
        playing_now.innerHTML += `
        <div class="card">
        <div class="card_img">
            <img src="${img_url + poster_path}" alt="${title}">
        </div>
        <div class="title">
            <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle"
                stroke-dasharray="${Math.round(vote_average) * 10}, 100"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="10" y="20" class="percentage">${Math.round(vote_average) * 10}</text>
            </svg>
            <h2>${title}</h2>
            <h6>${release_date}</h6>
        </div>`
    }


}


// 

function rateded() {
    fetch(rated).then(res => res.json()).then(ratdata => {
    console.log(ratdata);
    rated_playing(ratdata.results)
    console.log('sss');
})
}

rateded()

var ret = document.querySelector('.rated')

function rated_playing(ratdata) {
    ret.innerHTML = ''
     for (let i = 0; i < ratdata.length; i++) {
        const {title, poster_path, vote_average, release_date} = ratdata[i];
        ret.innerHTML += `
        <div class="card">
        <div class="card_img">
            <img src="${img_url + poster_path}" alt="${title}">
        </div>
        <div class="title">
            <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle"
                stroke-dasharray="${Math.round(vote_average) * 10}, 100"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="10" y="20" class="percentage">${Math.round(vote_average) * 10}</text>
            </svg>
            <h2>${title}</h2>
            <h6>${release_date}</h6>
        </div>`
    }
}

rated_playing()
