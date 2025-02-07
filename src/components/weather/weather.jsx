export function Weather({ data }) {

    if (!data) {
        return null
    } else if (!data.weather[0]) {
        return null
    }

    const weather = data.weather[0]

    return (
        <>
            <div className="flex--item">
                <h3>Погода</h3>
                {weather.main ? (
                    <p>{weather.main}</p>
                ) : null}
                {weather.description ? (
                    <p>{weather.description}</p>
                ) : null}
            </div>
        </>
    )
}