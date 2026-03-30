import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero Banner/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/Pricing/Pricing"
import Products from "./Components/Products/Products"
import StartsBanner from "./Components/StarsBanner/StartsBanner"
import StepsCards from "./Components/StepsGuide/StepsCards"
import Workflow from "./Components/Workflow/Workflow"


const fetchProduct = async ()=>{
  let res = await fetch('/product.json')
  return res.json()
}

const productPromise = fetchProduct()



function App() {


  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <StartsBanner />
        <div className="my-20">
          <div className='text-center space-y-6 mx-3'>
            <h1 className='text-3xl md:text-5xl font-bold'> Premium Digital Tools</h1>
            <p className='font-extralight'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
          </div>
          <div className="tabs tabs-box bg-transparent justify-center mt-5">
            <input type="radio"
              name="my_tabs_1"
              className={`tab w-30 rounded-full`}
              aria-label="Products" />
            <input type="radio"
              name="my_tabs_1"
              className={`tab w-30 rounded-full`}
              aria-label={`Carts(0)`}
              defaultChecked />

          </div>
        </div>

        <Products productPromise={productPromise} />

        <StepsCards />
        <Pricing />
        <Workflow />
        <Footer />
      </div>
    </>
  )
}

export default App
