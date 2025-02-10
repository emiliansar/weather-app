export function Snow({ snow }) {

    if(!snow) {
        return null
    }

    return (
        <div className="info--widget widget snow">
            <h3 className="widget--item widget--title">Снег</h3>
            <p className="widget--item widget--text"><span>Осадки</span> <span>{snow["1h"]} мм/ч</span></p>
        </div>
    )
}