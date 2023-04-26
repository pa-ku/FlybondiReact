import './style.css'
import Header from './components/Header'
import Banner from './components/Home/Banner'
import SearchBar from './components/Home/SearchBar'

import InfoSection from './components/Home/WrapperInfo'

import Footer from './components/Footer'

function App() {

  return (
    <>
  <Header />
   <Banner />
   <SearchBar/>
   <InfoSection />
   <Footer />
    </>
  )
}

export default App
