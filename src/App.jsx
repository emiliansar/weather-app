import { useQuery } from '@tanstack/react-query'
import { weatherService } from './services/wether.service'
import './App.css'
import { Weather } from './components/weather/weather'
import { Main } from './components/weather/main'
import { Wind } from './components/weather/wind'
import { Clouds } from './components/weather/clouds'
import { Rain } from './components/weather/rain'
import { Snow } from './components/weather/snow'
import { useGeolocated } from 'react-geolocated'
import { GeoAvailable } from './components/weather/geoCoords/geoAvalible'
import { GeoEnabled } from './components/weather/geoCoords/geoEnabled'

function App() {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })

  console.log(coords)

  const { data } = useQuery({
    queryKey: ['weather api'],
    queryFn: () => weatherService.getWeather(coords.latitude, coords.longitude),
  })

  return !isGeolocationAvailable ? (
    <GeoAvailable />
  ) : !isGeolocationEnabled ? (
    <GeoEnabled />
  ) : coords ? (
    <>
      <div className="flex">
        <Weather data={data} />
        <Main data={data} />
        <Wind data={data} />
        <Clouds data={data} />
        <Rain data={data} />
        <Snow data={data} />
      </div>
    </>
  ) : <div>Получение данных...</div>

  // return !isGeolocationAvailable ? (
  //   <div>Your browser does not support Geolocation</div>
  // ) : !isGeolocationEnabled ? (
  //   <div>Geo is not enabled</div>
  // ) : coords ? (
  //   <div>
  //     <p><span>Широта </span><span>{coords.latitude}</span></p>
  //     <p><span>Долгота </span><span>{coords.longitude}</span></p>
  //     <p><span>Высота </span><span>{coords.altitude}</span></p>
  //     <p><span>Направление </span><span>{coords.heading}</span></p>
  //     <p><span>Скорость </span><span>{coords.speed}</span></p>
  //   </div>
  // ) : (
  //   <div>Getting the location's data</div>
  // )

  // const { data } = useQuery({
  //   queryKey: ['weather api'],
  //   queryFn: () => weatherService.getWeather(),
  // })

  // return (
  //   <>
  //     <div className="flex">
  //       <Weather data={data} />
  //       <Main data={data} />
  //       <Wind data={data} />
  //       <Clouds data={data} />
  //       <Rain data={data} />
  //       <Snow data={data} />
  //     </div>
  //   </>
  // )
}

export default App
