import Header from "./components/header"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import { useState } from "react"
import {ways,differences} from './data'

export default function App() {

const [content, setContent] = useState('Нажми на кнопку')

  function handleClick(type) {
    setContent(type)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Наш подход к обучению</h1>
          <ul>
            {ways.map((way) => <WayToTeach key={way.description} {...way} />)}
          {/* <WayToTeach title={ways[0].title} description={ways[0].description}></WayToTeach>
          <WayToTeach {... ways[1]}></WayToTeach>
          <WayToTeach {... ways[2]}></WayToTeach>
          <WayToTeach {... ways[3]}></WayToTeach> */}

          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button isActive={content=='way'} onClick={()=>handleClick('way')}>Подход</Button>
          <Button isActive={content=='easy'} onClick={()=>handleClick('easy')}>Доступность</Button>
          <Button isActive={content=='program'} onClick={()=>handleClick('program')}>Концентрация</Button>

          {differences[content] ? <p>{differences[content]}</p> : <p>Нажми на кнопку</p>}
          
        </section>
      </main>

    </div>
  )
}