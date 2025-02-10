import { Tornado } from "lucide-react";

export function Wind({ wind }) {

    if (!wind) {
        return null
    }

    return (
        <>
            <div className="info--widget widget wind">
                <h3 className="widget--item widget--title">
                    <span>Ветер</span>
                    <Tornado />
                </h3>
                {wind.speed ? (
                    <p className="widget--item widget--text"><span>Скорость</span> <span>{wind.speed} м/сек</span></p>
                ): null}
                {wind.deg ? (
                    <p className="widget--item widget--text"><span>Направление</span> <span>{wind.deg} град.</span></p>
                ): null}
                {wind.gust ? (
                    <p className="widget--item widget--text"><span>Порывы</span> <span>{wind.gust} м/сек</span></p>
                ): null}
            </div>
        </>
    )
}