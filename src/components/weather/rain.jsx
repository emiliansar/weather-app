export function Rain({ rain }) {

    if(!rain) {
        return null
    } 

    return (
        <div className="info--widget widget temp">
            <h3 className="widget--item widget--title">Дождь</h3>
            <p className="widget--item widget--text"><span>Осадки</span> <span>{rain["1h"]} мм/ч</span></p>
        </div>
    )
}