export function Rain({ data }) {

    if(!data) {
        return null
    } else if (!data.rain) {
        return null
    }

    const rain = data.rain

    return (
        <div className="flex--item">
            <h3>Дождь</h3>
            <p>Осадки: <span>{rain["1h"]}</span> мм/ч</p>
        </div>
    )
}