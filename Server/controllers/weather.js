
var request = require("request");

const weatherUrl = `https://twcservice.mybluemix.net/api/weather/v1/geocode/37.806125/-122.230467/forecast/daily/7day.json`;
var fetchWeatherData = function(req,res){
  request.get(weatherUrl, {
    'auth': {
      'user': 'b5c2d043-830e-4ec7-a17d-76fbd4b8246e',
      'pass': 'lxaNrBIfcV',
      'sendImmediately': false
    }
  },function (error, response, body) {
    if (error) throw new Error(error);

    //Get the results
    var arr = [];
    var data = JSON.parse(body);
    console.log(data);
    var forecasts = data.forecasts;

    //Create an array of avg temperature
    for(var i=0; i < forecasts.length; i++){
      arr[i] = (forecasts[i].max_temp);
    }
    //Send the data
    res.send(arr);
  });
}

module.exports.fetchWeatherData = fetchWeatherData;
