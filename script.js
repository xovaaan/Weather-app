const apiKey = "acf20f8c45682e40f15ca9751a1ea44f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const button = document.querySelector(".search button");
const picture = document.querySelector(".rain");

async function weather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json(); 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tempareture").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/hr";

    if(data.weather[0].main == "Clouds"){
        picture.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        picture.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        picture.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        picture.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        picture.src = "images/mist.png"
    }
    
    document.querySelector(".weather").style.display = "block";

} 

button.addEventListener("click", ()=>{
   weather(search.value);
})

