import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import data from '../../data'
import './Home.css'

export function Home() {
  const card = data.map(data => 
    <Card 
      key={data.title}
      {...data}
    />)

  return (
    <div id="homeContainer">
      <Header />
      <div className="cardsContainer">
        {card}
      </div>
    </div>
  )
}