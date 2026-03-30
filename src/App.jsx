import Hero from "./Components/Hero Banner/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/Pricing/Pricing"
import StartsBanner from "./Components/StarsBanner/StartsBanner"
import StepsCards from "./Components/StepsGuide/StepsCards"


function App() {


  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <StartsBanner />


        <StepsCards />
        <Pricing/>
      </div>
    </>
  )
}

export default App
