import './App.css'
import Navbar from './components/Navbar'
import data from './data'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar />
      {data.map((cardData) => {
        return (
          <Card 
            key={cardData.id}
            {...cardData}
          />
        )
      })}
    </>
  )
}

export default App