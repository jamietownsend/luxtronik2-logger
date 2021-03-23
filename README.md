# luxtronik2-logger

Logs data from a luxtronik2 device to a mongoDB instance

## Setting the right environment

See: https://www.npmjs.com/package/config

export NODE_ENV=production

## Running the code

npm start

# Fields with values
{
  "dateTime": "2021-03-20T08:41:00.312Z",
  "data": {
    "values": {
      "temperature_supply": 47.6,
      "temperature_return": 44.7,
      "temperature_target_return": 34.4,
      "temperature_extern_return": 46.1,
      "temperature_hot_gas": 89.3,
      "temperature_outside": 0.4,
      "temperature_outside_avg": 2.9,
      "temperature_hot_water": 47.4,
      "temperature_hot_water_target": 50,
      "temperature_heat_source_in": 1.5,
      "temperature_heat_source_out": -50,
      "temperature_mixer1_flow": 40.1,
      "temperature_mixer1_target": 39.5,
      "temperaturw_RFV": "no",
      "temperature_mixer2_flow": "no",
      "temperature_mixer2_target": "no",
      "temperature_solar_collector": "no",
      "temperature_solar_storage": "no",
      "temperature_external_source": "no",

data.values.analogOut1 (1000, 500)
data.values.analogOut2 (1000)
data.values.ASDin (1, 0)
