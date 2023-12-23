var main_week = document.getElementById('main_week')
var main = document.getElementById('main_film')
var trend_film = document.getElementById('trend_film')
var main_film = document.getElementById('main_filmer')
var btn = document.querySelector('.this_week')
var tren = document.querySelector('.today')


var main_url = 'https://api.themoviedb.org/3';
const img_url = 'https://image.tmdb.org/t/p/w500'; 
const img = 'https://image.tmdb.org/t/p/w500';
const api = 'api_key=a9d0c458a5571d93fb3c1bc190334abf';

const api_url = main_url + '/discover/movie?/sort_by=popularity.desc&' + api;
const trend_url = main_url + '/trending/all/day?' + api;
const On_tv = main_url + '/tv/on_the_air?' + api;
const tret = main_url + '/tv/airing_today?' + api;
const detail_url = main_url + '/trending/all/day?' + api;


// // 
Ontv()

function get() {
    fetch(api_url).then(res => res.json()).then(data => {
        console.log(data);
        display(data.results)
    })
    
}
get()


function display(cards) {
    btn.style.color = 'black';
    btn.style.background = 'white';
    tren.style.color = '#65e7ba';
    tren.style.background = 'black';
    trend_film.style.display = 'none'
    main_film.style.display = 'block'
    console.log('salom');
    main.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
        const { title, poster_path, vote_average, release_date, original_title, id} = cards[i];
        main.innerHTML +=`
            <div class="card">
            <div class="card_img">
            <a onclick="detail(${id})"><img src="${img_url + poster_path}" alt="${title}"></a>
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
            </div>
        `
    }
}


///////////////////             ////////////////////////////////

function trendget() {
    fetch(trend_url).then(res => res.json()).then(trendata => {
        console.log(trendata);
        trend(trendata.results)
    })
}


function trend(trendata) {
    main_week.innerHTML = ''
    btn.style.color = '#65e7ba';
    btn.style.background = 'black';
    tren.style.color = 'black';
    tren.style.background = 'white';
    trend_film.style.display = 'block'
    main_film.style.display = 'none'
    

    console.log('salom');

    trendata.forEach(trendmovie => {
        const { title, poster_path, vote_average, release_date } = trendmovie
        main_week.innerHTML += `
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
        </div>
        </div>
    `
    });
}

function detail(id) {
    location.href = `${location.protocol}//${location.host}/Html/details.html?id=${id}`
}

////////////////////        ///////////////////////////////////

var on_tv = document.getElementById('on_tv')
var ontv_film = document.getElementById('ontv_filmer')
var threater_film = document.getElementById('threaterfilm')
var threater = document.querySelector('.threater')
var trending_btn = document.querySelector('.trending_btn')

function Ontv() {
    fetch(On_tv).then(res => res.json()).then(ondata => {
        console.log(ondata);
        serial(ondata.results)
    })
}


serial()

function serial(ondata) {
    ontv_film.style.display = 'block'
    threater_film.style.display = 'none'
    threater.style.background = 'white'
    threater.style.color = 'black'
    trending_btn.style.background = 'black'
    trending_btn.style.color = '#65e7ba'  
   
   on_tv.innerHTML = ''
    for (let i = 0; i < ondata.length; i++) {
        const {  poster_path, vote_average, original_name, first_air_date } = ondata[i];
        on_tv.innerHTML +=
            `              <div class="card">
            <div class="card_img">
            <img src="${img_url + poster_path}" alt="${original_name}">
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
            <h2>${original_name}</h2>
            <h6>${first_air_date}</h6>
            </div>
            </div>`
    }
}



function trhreater_get() {
    fetch(tret).then(res => res.json()).then(threadata => {
        console.log(threadata);
        threat(threadata.results)
    })
}

trhreater_get()


function threat(threadata) {  
    ontv_film.style.display = 'none'
    threater_film.style.display = 'block'
    threater.style.background = 'black'
    threater.style.color = '#65e7ba' 
    trending_btn.style.background = 'white'
    trending_btn.style.color = 'black' 
    var thre_film = document.getElementById('Threaters')

   thre_film.innerHTML = ''

    threadata.forEach(threatmovie => {
        const { poster_path, vote_average, original_name, first_air_date } = threatmovie
        thre_film.innerHTML += `
        <div class="card">
        <div class="card_img">
            <img src="${img_url + poster_path}" alt="${original_name}">
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
            <h2>${original_name}</h2>
            <h6>${first_air_date}</h6>
        </div>
        </div>
    `
    });
}

threat()