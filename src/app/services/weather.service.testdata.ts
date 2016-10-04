const weatherServiceTestData = {
  "city": {
    "id": 4407066,
    "name": "Saint Louis",
    "coord": {"lon": -90.197891, "lat": 38.62727},
    "country": "US",
    "population": 0
  },
  "cod": "200",
  "message": 0.2544,
  "cnt": 5,
  "list": [{
    "dt": 1475082000,
    "temp": {"day": 64.6, "min": 55.15, "max": 64.6, "night": 55.15, "eve": 60.6, "morn": 64.6},
    "pressure": 1007.53,
    "humidity": 41,
    "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
    "speed": 16.02,
    "deg": 348,
    "clouds": 0
  }, {
    "dt": 1475168400,
    "temp": {"day": 72.18, "min": 53.1, "max": 72.77, "night": 63.9, "eve": 70, "morn": 53.1},
    "pressure": 1014.93,
    "humidity": 53,
    "weather": [{"id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03d"}],
    "speed": 18.3,
    "deg": 4,
    "clouds": 44
  }, {
    "dt": 1475254800,
    "temp": {"day": 73.74, "min": 61.07, "max": 73.74, "night": 62.17, "eve": 69.71, "morn": 61.07},
    "pressure": 1011.33,
    "humidity": 55,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 15.05,
    "deg": 346,
    "clouds": 12,
    "rain": 0.56
  }, {
    "dt": 1475341200,
    "temp": {"day": 69.75, "min": 59.36, "max": 69.75, "night": 59.36, "eve": 67.05, "morn": 59.9},
    "pressure": 1010.49,
    "humidity": 0,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 7.67,
    "deg": 305,
    "clouds": 66,
    "rain": 1.96
  }, {
    "dt": 1475427600,
    "temp": {"day": 69.64, "min": 55.13, "max": 69.64, "night": 59.74, "eve": 68.02, "morn": 55.13},
    "pressure": 1014.58,
    "humidity": 0,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 4.85,
    "deg": 352,
    "clouds": 50,
    "rain": 0.35
  }]
};

export default weatherServiceTestData;