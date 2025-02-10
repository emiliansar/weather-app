import { Thermometer } from "lucide-react";

export function Main({ main }) {
    return (
        <>
            <div className="info--widget widget temp">
                <h3 className="widget--item widget--title">
                    <span>Температура</span>
                    <Thermometer />
                </h3>
                {main.temp ? (
                    <p className="widget--item widget--text"><span>Текущая</span> <span>{Math.round(main.temp)} °C</span></p>
                ): null}
                {main.feels_like ? (
                    <p className="widget--item widget--text"><span>Ощущается</span><span>{Math.round(main.feels_like)} °C</span></p>
                ): null}
                {main.temp_min ? (
                    <p className="widget--item widget--text"><span>Минимальная</span> <span>{Math.round(main.temp_min)} °C</span></p>
                ): null}
                {main.temp_max ? (
                    <p className="widget--item widget--text"><span>Максимальная</span> <span>{Math.round(main.temp_max)} °C</span></p>
                ): null}
                {main.humidity ? (
                    <p className="widget--item widget--text"><span>Влажность</span> <span>{main.humidity} %</span></p>
                ): null}
            </div>
        </>
    )
}