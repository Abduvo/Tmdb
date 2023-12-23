var filter_angel = document.querySelector('.filter_angel')
var filter_down_angel = document.querySelector('.filter_down_angel')
var filter = document.querySelector('.filter')
var watch = document.querySelector('.results')
var watch_ange = document.querySelector('.watch_angel')
var watch_down = document.querySelector('.watch_down')

var main_url = 'https://api.themoviedb.org/3';
const img_url = 'https://image.tmdb.org/t/p/w200';
const api = 'api_key=a9d0c458a5571d93fb3c1bc190334abf';

const last_tv = main_url + '/tv/popular?' + api;
const tv_airing = main_url + '/tv/airing_today?' + api;

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



// // // FILM

function lakishim_show() {
    fetch(last_tv).then(res => res.json()).then(tvdata => {
        console.log(tvdata);
        showTv(tvdata.results)
    })
}

lakishim_show()

var popular_TV_Shows = document.querySelector('.Popular_TV_Shows')
function showTv(tvShow) {
    popular_TV_Shows.innerHTML = "";
    for (let i = 0; i < tvShow.length; i++) {
        const { title, poster_path, vote_average, release_date, original_title } = tvShow[i];
        popular_TV_Shows.innerHTML +=
            ` <div class="card">
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
            </div>
            </div>`
    }
}



// 
var airing_Today = document.querySelector('.airing_Today')
function airing() {
    fetch(tv_airing).then(res => res.json()).then(airingdata => {
        console.log(airingdata);
        shows_Airing_Today(airingdata.results)
    })
}

airing()

function shows_Airing_Today(airingdata) {
    airing_Today.innerHTML = ''
    for (let i = 0; i < airingdata.length; i++) {
        const { name, poster_path, vote_average, first_air_date} = airingdata[i];
        airing_Today.innerHTML +=
            ` <div class="card">
            <div class="card_img">
            <img src="${img_url + poster_path}" alt="${name}">
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
            <h2>${name}</h2>
            <h6>${first_air_date}</h6>
            </div>
            </div>`
    }
}

shows_Airing_Today()