export function Clouds({ data }) {

    if (!data) {
        return null
    } else if (!data.clouds) {
        return null
    }

    const cloud = data.clouds

    return (
        <>
            <div className="flex--item">  
                <h3>Облака</h3>
                <p>Облачность: <span>{cloud.all}</span></p>
            </div>
        </>
    )
}