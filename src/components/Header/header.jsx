import { useState } from 'react'
import logo from '/vite.svg'
import {styled} from 'styled-components'
// import './Header.css'

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

export default function Header(){
  let now = new Date().toLocaleTimeString()
  const [time,setTime] = useState(now)
  
setInterval(()=>{
  setTime(() => new Date().toLocaleTimeString())
},1000)

    return (
      <HeaderContainer>
        <img src={logo} alt={'vite'} />
        <span>Время сейчас {time}</span>
      </HeaderContainer>
  )
}