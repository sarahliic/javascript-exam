let name1 = document.querySelector(".name h2");

function weatherApi() {
  let apiKey = "0323a2382683d32ee79d37d53baf86da";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=56f59d26f82af4ee81cbc6068dc9100d`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let temp = document.querySelector(".temp");
      let name2 = document.querySelector(".name");
      let hum = document.querySelector(".hum");
      let lon = document.querySelector(".lon");
      let lat = document.querySelector(".lat");

      temp.innerHTML = `${data.name}`;
      name2.innerHTML = `${data.main.temp}`;
      hum.innerHTML = `: ${data.main.humidity}`;
      lon.innerHTML = `: ${data.coord.lon}`;
      lat.innerHTML = `: ${data.coord.lat}`;
    });
}

// Callig
weatherApi();
