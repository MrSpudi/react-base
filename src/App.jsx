import Header from "./components/header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button"
import {ways} from './data'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Наш подход к обучению</h1>
          <ul>
          <WayToTeach title={ways[0].title} description={ways[0].description}></WayToTeach>
          <WayToTeach {... ways[1]}></WayToTeach>
          <WayToTeach {... ways[2]}></WayToTeach>
          <WayToTeach {... ways[3]}></WayToTeach>
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button></Button>
        </section>
      </main>

    </div>
  )
}