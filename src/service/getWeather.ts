//import { weatherStore } from '../store/wheatherStore'
type CityWeatherData = {
  location:{
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  }; 
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition:{
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  }
};

export const getTemp = async function  (location: string) {
    try {
      const result = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=8ee68a50f4e94279a4d162815222304&q=${location}&aqi=no`
      );
      const data:CityWeatherData = await result.json();
      return data.current.temp_c;
    } catch (e) {
      return e.message;
    }
  } 
  