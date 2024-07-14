import React from 'react'
import ReferandEarn from './components/ReferandEarn'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Refer from './components/Refer'
import Howrefer from './components/Howrefer'
import Benifits from './components/Benifits'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <ReferandEarn />
      <Navbar />
      <Slider />
      <Refer />
      <Howrefer />
      <Benifits />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
