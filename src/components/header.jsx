import { useState } from 'react'
import logo from '/vite.svg'

export default function Header(){
  let now = new Date().toLocaleTimeString()
  const [time,setTime] = useState(now)
  
setInterval(()=>{
  setTime(() => new Date().toLocaleTimeString())
},1000)

    return (
      <header>
        <img src={logo} alt={'vite'} />
        <span>Время сейчас {time}</span>
      </header>
  )
}