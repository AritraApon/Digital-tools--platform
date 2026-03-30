import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero Banner/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/Pricing/Pricing"
import StartsBanner from "./Components/StarsBanner/StartsBanner"
import StepsCards from "./Components/StepsGuide/StepsCards"
import Workflow from "./Components/Workflow/Workflow"


function App() {


  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <StartsBanner />


        <StepsCards />
        <Pricing/>
        <Workflow/>
        <Footer/>
      </div>
    </>
  )
}

export default App
