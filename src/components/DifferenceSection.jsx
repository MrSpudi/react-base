import Button from "./Button/Button"
import { useState } from "react"
import {differences} from '../data'

export default function DifferenceSection(){
    const [content, setContent] = useState('Нажми на кнопку')

  function handleClick(type) {
    setContent(type)
  }
    return(
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button isActive={content=='way'} onClick={()=>handleClick('way')}>Подход</Button>
          <Button isActive={content=='easy'} onClick={()=>handleClick('easy')}>Доступность</Button>
          <Button isActive={content=='program'} onClick={()=>handleClick('program')}>Концентрация</Button>

          {differences[content] ? <p>{differences[content]}</p> : <p>Нажми на кнопку</p>}
          
        </section>
    )
}