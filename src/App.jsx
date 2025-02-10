import { useQuery } from '@tanstack/react-query'
import { weatherService } from './services/wether.service'
import './App.css'
import { useGeolocated } from 'react-geolocated'
import { GeoAvailable } from './components/geoCoords/geoAvalible'
import { GeoEnabled } from './components/geoCoords/geoEnabled'
import { WeatherInfo } from './components/weather/weatherInfo'
import { WeatherGeo } from './components/weather/wetherGeo'

function App() {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })


  const { data } = useQuery({
    queryKey: ['weather api'],
    queryFn: () => weatherService.getWeather(coords.latitude, coords.longitude),
  })
  if (data) console.log({data})
  

  return !isGeolocationAvailable ? (
    <GeoAvailable />
  ) : !isGeolocationEnabled ? (
    <GeoEnabled />
  ) : coords ? (
    <>
      <div className="main">
        <div className="weather">
          <WeatherGeo data={data} />
          <WeatherInfo data={data} />
        </div>
      </div>
    </>
  ) : <div>Получение данных...</div>
}

export default App
