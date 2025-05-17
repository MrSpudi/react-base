import WayToTeach from "./WayToTeach"
import {ways} from '../data.js'

export default function TeachingSection (){
    return(
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
    )
}