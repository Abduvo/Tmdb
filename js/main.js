var main_url = 'https://api.themoviedb.org/3';
const img_url = 'https://image.tmdb.org/t/p/w200'; 
const api = 'api_key=a9d0c458a5571d93fb3c1bc190334abf';
const popul = main_url + '/person/popular?' + api;

var people_man = document.querySelector('.people_main')
function pepeople_main() {
    fetch(popul).then(res => res.json()).then(peopledata => {
        console.log(peopledata);
        people(peopledata.results)
        console.log('salom');
    })
}

pepeople_main()


function people(people_popular) {
    people_man.innerHTML = ''
    for (let i = 0; i < people_popular.length; i++) {
        const {name, profile_path, overview, id} = people_popular[i];
        people_man.innerHTML +=
            `<div class="card_people">
                <div class="people_title">
                    <img src="${img_url + profile_path}" alt="">
                </div>
                <div class="people_body">
                    <h3>${name}</h3>
                    <p>${overview}</p>
                </div>
            </div>`
    }
}
people()

