import { MapPin } from "lucide-react"

export function WeatherGeo({ data }) {

    if (!data) {
        return null
    }

    const name = data.name,
            coord = data.coord,
            sys = data.sys,
            timezone = data.timezone

    return (
        <div className="weather--geo">
            <MapPin />
            <p className="name">{name}</p>
            <p className="sys">{sys.country}</p>
            <p className="timezone">+{timezone/3600}часа</p>
        </div>
    )
}