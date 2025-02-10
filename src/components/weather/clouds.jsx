import { Cloud } from "lucide-react"

export function Clouds({ clouds }) {

    if (!clouds) {
        return null
    }

    return (
        <>
            <div className="info--widget widget clouds">  
                <h3 className="widget--item widget--title">
                    <span>Облака</span>
                    <Cloud />
                </h3>
                <p className="widget--item widget--text"><span>Облачность</span> <span>{clouds.all} %</span></p>
            </div>
        </>
    )
}