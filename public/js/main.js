const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');
const temp_real_val = document.getElementById('temp_real_val');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerHTML = `Plz write city name before search`;
        data_hide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=abf8a476125c0963ea6350de9d44c4e6`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerHTML = arrData[0].main.temp;
            // temp_status.innerHTML = arrData[0].weather[0].main;

            const temp_mood = arrData[0].weather[0].main;

            if (temp_mood == "Clear") {
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #c9f005;"></i>';
            }
            else if (temp_mood == "Clouds") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud" style="color: #07cee9;"></i>';
            }
            else if (temp_mood == "Rain") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color: #07cee9;"></i>';
            }
            else if (temp_mood == "Mist") {
                temp_status.innerHTML = '<i class="fa-solid fa-smog" style="color: #07cee9;"></i>';
            }
            else {
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #c9f005;"></i>';
            }


            data_hide.classList.remove('data_hide');

        } catch {
            city_name.innerHTML = `Plz enter city name properly`;
            data_hide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);