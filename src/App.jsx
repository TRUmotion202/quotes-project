import { useState } from 'react'
import './App.css'
import QuoteRandom from './components/QuoteRandom'
import db from './db/quotelist.json'

const arrColors = ["#641E16", "#512E5F", "#1B4F72", "#0E6251", "#7D6608", "#784212", "#4D5656", "#4D5656", "#000000"
]

function App() {

  const getRandom = (arrayElements) => {
    const arrIndexed = arrayElements.length
    const randomIndex = Math.floor(Math.random() * arrIndexed)

    return arrayElements[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(db))

  const [color, setColor] = useState(getRandom(arrColors))

  const refreshQuoteBox = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrColors))
  }

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteRandom 
      quote={quote}
      refreshQuoteBox={refreshQuoteBox}
      color={color}
      />
    </div>
  )
}

export default App
