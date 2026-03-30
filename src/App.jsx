import Hero from "./Components/Hero Banner/Hero"
import Navbar from "./Components/Navbar/Navbar"
import StartsBanner from "./Components/StarsBanner/StartsBanner"
import StepsCards from "./Components/StepsGuide/StepsCards"

function App() {


  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero/>
        <StartsBanner/>


       <StepsCards/>

      </div>
    </>
  )
}

export default App
