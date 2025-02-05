import axios from "axios"

class WeatherService {

    URL = 'http://localhost:3000/weather_api'

    async getWeather() {
        const {data} = await axios.get(this.URL)
        return data
    }
}

export const weatherService = new WeatherService()