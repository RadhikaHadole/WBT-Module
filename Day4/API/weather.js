//DOM Event Listners
document.querySelector("button").addEventListener("click", function () {
  let cityname = document.getElementById("x1").value;
  if (cityname == "") {
    document.getElementById("result").innerHTML = "City Name Required";
  } else {
    const APIKEY = "391f3935e9135b337f96a2e1b5d9f8c3";
    const XHR = new XMLHttpRequest();
    console.log(XHR);
    console.log(XHR.readyState, XHR.status);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKEY}&units=metric`;
    XHR.onreadystatechange = function () {
      console.log(XHR.readyState, XHR.status);
      if (XHR.readyState == 4 && XHR.status == 200) {
        let result = XHR.responseText;
        console.log(result);
        let info = JSON.parse(result);
        console.log(info);
        document.getElementById("result").innerHTML = `
            <b>Temperature</b>=${info.main.temp}<br>
            <b>Wind Speed</b>=${info.wind.speed}<br>`;
      }
    };
    XHR.open("GET", API);
    XHR.send();
  }
});
