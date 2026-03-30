import Hero from "./Components/Hero Banner/Hero"
import Navbar from "./Components/Navbar/Navbar"
import StartsBanner from "./Components/StarsBanner/StartsBanner"

function App() {


  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero/>
        <StartsBanner/>


      </div>
    </>
  )
}

export default App
