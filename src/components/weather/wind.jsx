export function Wind({ data }) {

    if (!data) {
        return null
    } else if (!data.wind) {
        return null
    }

    const wind = data.wind

    return (
        <>
            <div className="flex--item">
                <h3>Ветер</h3>
                {wind.speed ? (
                    <p>Скорость: <span>{wind.speed}</span></p>
                ): null}
                {wind.deg ? (
                    <p>Направление: <span>{wind.deg}</span></p>
                ): null}
                {wind.gust ? (
                    <p>Порывы: <span>{wind.gust}</span></p>
                ): null}
            </div>
        </>
    )
}