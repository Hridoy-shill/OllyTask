import Footer from "./Components/Footer/Footer"
import Gallery from "./Components/Gallery/Gallery"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="mt-5">
        <Gallery></Gallery>
      </div>

      <div className="mt-5">
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
