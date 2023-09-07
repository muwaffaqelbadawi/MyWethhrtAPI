const api_key = "1b1ce6507879e8939e9da7bfbccce843";

const getWeatherData = () => {
  const reqData = {
    city: "Tokyo",
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

const weatherParams = (data) => {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  return [name, icon, description, temp, humidity, speed];
};

const displayContent = (params) => {
  document.querySelector(".city").innerText = `Weather in ${params[0]}`;
  document.querySelector(".city").innerText = `Weather in ${params[0]}`;
  document.querySelector(".city").innerText = `Weather in ${params[0]}`;
  document.querySelector(".city").innerText = `Weather in ${params[0]}`;

  //   console.log(params[0]);
};

const processWetherRequest = async () => {
  const requestData = getWeatherData();
  const requestURL = buildRequestURL(requestData);
  const weather = await requestWeather(requestURL);
  const params = weatherParams(weather);
  displayContent(params);
};

processWetherRequest();
