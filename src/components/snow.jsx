export function Snow({ data }) {

    if(!data) {
        return null
    } else if (!data.snow) {
        return null
    }

    const snow = data.snow

    return (
        <div className="flex--item">
            <h3>Снег</h3>
            <p>Осадки: <span>{snow["1h"]}</span> мм/ч</p>
        </div>
    )
}