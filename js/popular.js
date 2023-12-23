var right_angel =document.querySelector('.right_angel')
var down_angel =document.querySelector('.down_angel')
var stream = document.querySelector('.stream')
var premies = document.querySelector('.premiers')
var filter_angel = document.querySelector('.filter_angel')
var filter_down_angel = document.querySelector('.filter_down_angel')
var filter = document.querySelector('.filter')
var popular = document.querySelector('.popular')
var watch = document.querySelector('.results')
var watch_ange = document.querySelector('.watch_angel')
var watch_down = document.querySelector('.watch_down')

var main_url = 'https://api.themoviedb.org/3';
const img_url = 'https://image.tmdb.org/t/p/w200';
const api = 'api_key=a9d0c458a5571d93fb3c1bc190334abf';

const select = main_url  + '/movie/popular?' + api;
const films = main_url  + '/trending/all/day?' + api;
const load = main_url  + '/tv/on_the_air?'+ api;
const playing = main_url  + '/movie/upcoming?'+ api;



function filter_right() {
    filter.style.display = 'block';
    filter_down_angel.style.display = 'block';
    filter.style.width = '100%';
    filter_angel.style.display = 'none';
}


function filter_down() {
    filter.style.display = 'none';
    filter_down_angel.style.display = 'none';
    filter.style.width = '100%';
    filter_angel.style.display = 'block';
}

function watch_right() {
    watch_down.style.display = 'block';
    watch.style.display = 'block';
    watch_ange.style.display = 'none';
}


function watch_angel() {
    watch_down.style.display = 'none';
    watch.style.display = 'none';
    watch_ange.style.display = 'block';
}

console.log('salom');

function populars() {
        fetch(select).then(res => res.json()).then(data => {
        console.log(data);
        film(data.results)
    })
}
populars()

function film(data) {
    data.forEach(movie => {
        const { title, poster_path, vote_average, release_date } = movie
        popular.innerHTML += `
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
    
    });
}

film()


// 
function loadmore() {
    fetch(films).then(res => res.json()).then(latestdata => {
    console.log(latestdata);
    loadMore(latestdata.results)
})
}
loadmore()

function loadMore(latestdata) {
latestdata.forEach(movie => {
    const { title, poster_path, vote_average, release_date } = movie
    popular.innerHTML += `
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

});
}

film()