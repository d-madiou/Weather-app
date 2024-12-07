const userInput = document.getElementById('name');
const searchBtn = document.getElementById('search');
const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const clouds = document.getElementById('clouds');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if (userInput.value != ''){
        searchWeather()
    }
})
let id = 'cd3632913a459b1c7f7368d4fe0d068d'; // Your API key
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather = () =>{
    fetch(url + '&q=' + userInput.value)
    .then(responsive => responsive.json())
    .then(data =>{
        console.table(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src='https://flagsapi.com/'+ data.sys.country + '/flat/32.png';

            temperature.querySelector('img').src='https://openweathermap.org/img/wn/' + data.weather[0].icon+'@4x.png';
            temperature.querySelector('figcaption').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        }
        else{
            main.classList.add('error');
            setTimeout(() =>{
                main.classList.remove('error');
            }, 1000);
        }

        userInput.value = '';
    })
}
const initApp = () => {
    userInput.value = 'Mamou';
    searchWeather();
}

initApp();