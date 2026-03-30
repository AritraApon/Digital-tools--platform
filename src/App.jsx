import { useState } from "react"
import Carts from "./Components/Carts/Carts"
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
const [activeButton , setActiveButton] = useState('products');
const [carts , setCats] = useState([])

  return (
    <>
      <div className="container mx-auto">
        <Navbar  carts={carts}/>
        <Hero />
        <StartsBanner />
        <div className="mt-20 mb-5">
          <div className='text-center space-y-6 mx-3'>
            <h1 className='text-3xl md:text-5xl font-bold'> Premium Digital Tools</h1>
            <p className='font-extralight'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
          </div>
          <div className="tabs tabs-box bg-transparent justify-center mt-5">
            <input type="radio"
            onClick={()=>setActiveButton('products')}
              name="my_tabs_1"
              className={`tab w-30 rounded-full  ${activeButton === 'products' ? 'bg-linear-to-r from-[#672df8] to-[#8a1af9] text-white': ''}`}
              aria-label="Products" />
            <input type="radio"
            onClick={()=>setActiveButton('carts')}
              name="my_tabs_1"
              className={`tab w-30 rounded-full ${activeButton === 'carts' ? 'bg-linear-to-r from-[#672df8] to-[#8a1af9] text-white ': ''}  `}
              aria-label={`Carts(${carts.length})`}
              defaultChecked />

          </div>
        </div>

        { activeButton === 'products' && <Products productPromise={productPromise} carts={carts} setCats={setCats} />}
        {activeButton === 'carts' && <Carts carts={carts} setCats={setCats}/>}

        <StepsCards />
        <Pricing />
        <Workflow />
        <Footer />
      </div>
    </>
  )
}

export default App
