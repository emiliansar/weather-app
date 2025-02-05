export function Main({ data }) {
    
    if (!data) {
        return null
    } else if(!data.main) {
        return null
    }

    const main = data.main

    return (
        <>
            <div className="flex--item">
                <h3>Главное</h3>
                {main.temp ? (
                    <p>Температура: <span>{main.temp}</span></p>
                ): null}
                {main.feels_like ? (
                    <p>Ощущается как: <span>{main.feels_like}</span></p>
                ): null}
                {main.temp_min ? (
                    <p>Минимальная сегодня: <span>{main.temp_min}</span></p>
                ): null}
                {main.temp_max ? (
                    <p>Максимальная сегодня: <span>{main.temp_max}</span></p>
                ): null}
                {main.humidity ? (
                    <p>Влажность: <span>{main.humidity}</span></p>
                ): null}
            </div>
        </>
    )
}