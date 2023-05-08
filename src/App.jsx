import './style.css'
import Header from './components/Header'
import Carousel, {CarouselItem} from './components/Home/Carousel'
import SearchBar from './components/Home/SearchBar'
import InfoSection from './components/Home/WrapperInfo'
import Footer from './components/Footer'

function App() {

  return (
    <>
  <Header />
  
  <Carousel>
  <CarouselItem img="banner1"></CarouselItem>
        <CarouselItem img="banner2"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
        <CarouselItem img="banner3"></CarouselItem>
 </Carousel>

   <SearchBar/>
   <InfoSection />
   <Footer />
    </>
  )
}

export default App
