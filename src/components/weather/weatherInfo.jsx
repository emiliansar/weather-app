import { Weather } from './weather'
import { Main } from './main'
import { Wind } from './wind'
import { Clouds } from './clouds'
import { Rain } from './rain'
import { Snow } from './snow'

export function WeatherInfo({ data }) {

    if (!data) {
        return null
    } 

    const weather = data.weather[0],
            main = data.main,
            wind = data.wind,
            rain = data.rain,
            clouds = data.clouds,
            snow = data.snow

    return (
        <div className="weather--info info">
            <Weather weather={weather} />
            <Main main={main} />
            <Wind wind={wind} />
            <Clouds clouds={clouds} />
            <Rain rain={rain} />
            <Snow snow={snow} />
        </div>
    )
}