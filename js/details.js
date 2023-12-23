var details = document.getElementById('details')
var movie_id = location.search.slice(4, location.search.length)
var detail_url = `https://api.themoviedb.org/3/movie/${movie_id}?`;
const api = 'api_key=a9d0c458a5571d93fb3c1bc190334abf';
const img_url = 'https://image.tmdb.org/t/p/w500'; 
var detail_credit =  `https://api.themoviedb.org/3/movie/${movie_id}/credits?`
const get_credits = detail_credit + api;
const detail = detail_url + api;


async function Fetchapi() {
    await fetch(detail)
    .then(res => res.json())
    .then(obj => showMovie(obj))
    
}
console.log(detail);
Fetchapi()

function showMovie(movie) {
    details.innerHTML = `
    <div class="kvant" style="background-color: rgba(128, 128, 128, 0.473);">
        <div class="row">
            <div class="col">
                <img src="${img_url + movie.poster_path ?? movie.backdrop_path}" alt="${movie.id}">
            </div>

            <div class="col">
                <h1>${movie.title ?? movie.name ?? movie.original_title}</h1>
                <p class="pg">PG-13 02/17/2023 (US)Adventure, Science Fiction, Comedy</p>

                <div class="row">
                    <svg viewBox="0 0 36 36" class="detail-chart">
                            <path class="circle"
                              stroke-dasharray="${Math.round(movie.vote_average) * 10}, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="10" y="20" class="percentage">${Math.round(movie.vote_average) * 10}</text>
                        </svg>
                </div>
                <h5>Overview</h5>
                <p class="text">${movie.overview}</p>

                <div class="row" style="display: flex; gap: 90px;">
                    <div class="col">
                        <h6>Jack Kirby</h6>
                        <p>Character</p>
                        <h6>Ernie Hart</h6>
                        <p>Character</p>
                    </div>
                    <div class="col">
                        <h6>Stan Lee</h6>
                        <p>Character</p>
                        <h6>Peyton Reed</h6>
                        <p>Character</p>
                    </div>
                    <div class="col">
                        <h6>Larry Lieber</h6>
                        <p>Character</p>
                        <h6>Jeff Loveness</h6>
                        <p>Character</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    details.style.background = `url(${img_url + movie.backdrop_path})`
    details.style.backgroundPosition = 'center top';
    details.style.backgroundRepeat = 'no-repeat';
    details.style.backgroundSize = 'cover';
}

showMovie()