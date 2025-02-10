export function Weather({ weather }) {

    // const weather = data.weather[0]
    if (weather.main == "Thunderstorm") weather.main = "Гроза"
    if (weather.main == "Drizzle") weather.main = "Морось"
    if (weather.main == "Rain") weather.main = "Дождь"
    if (weather.main == "Snow") weather.main = "Снег"
    if (weather.main == "Clouds") weather.main = "Облака"
    if (weather.main == "Mist") weather.main = "Туман"

    return (
        <>
            <div className="info--widget widget whr">
                <h3 className="widget--item widget--title"><span>Погода</span> <img src={`https://rodrigokamada.github.io/openweathermap/images/${weather.icon}_t.png`} alt="" /></h3>
                
                {weather.main ? (
                    <p className="widget--item widget--text">{weather.main}</p>
                ) : null}
                {weather.description ? (
                    <p className="widget--item widget--text">{weather.description}</p>
                ) : null}
            </div>
        </>
    )
}