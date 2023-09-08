const api_key = "1b1ce6507879e8939e9da7bfbccce843";

const getWeatherData = () => {
  const reqData = {
    city: "London",
  };
  return reqData;
};

const buildRequestURL = (requestData) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${requestData.city}&appid=${api_key}`;
};

const requestWeather = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
};

const displayContent = (data) => {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  document.querySelector(".city").innerText = `Weather in ${name}`;
  document.querySelector(
    ".icon"
  ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = `${temp}°C`;
  document.querySelector(".humidity").innerText = `humidity: ${humidity}%`;
};

const processWetherRequest = async () => {
  const requestData = getWeatherData();
  const requestURL = buildRequestURL(requestData);
  const weather = await requestWeather(requestURL);
  displayContent(weather);
};

processWetherRequest();
