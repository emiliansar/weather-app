import axios from "axios"
import { useGeolocated } from "react-geolocated"

class WeatherService {

    API_key = 'bed93228293f5729c79ad41dfa32913d'

    async getWeather(lat, lon) {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_key}`)
        return data
    }
}

export const weatherService = new WeatherService()