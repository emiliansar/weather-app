import { useQuery } from '@tanstack/react-query'
import { weatherService } from './services/wether.service'
import './App.css'
import { Weather } from './components/weather'
import { Main } from './components/main'
import { Wind } from './components/wind'
import { Clouds } from './components/clouds'
import { Rain } from './components/rain'
import { Snow } from './components/snow'

function App() {
  const { data } = useQuery({
    queryKey: ['weather api'],
    queryFn: () => weatherService.getWeather(),
  })

  return (
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
  )
}

export default App
