import Cards from "./components/cards";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function App(){
  return(
    <div className="container-app">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
}