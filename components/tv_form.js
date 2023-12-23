function name(img_url, poster_path, vote_average, original_name, first_air_date) {
     
    for (let i = 0; i < ondata.length; i++) {
        const {  poster_path, vote_average, original_name, first_air_date } = ondata[i];
        on_tv.innerHTML +=
            `<div class="card">
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

