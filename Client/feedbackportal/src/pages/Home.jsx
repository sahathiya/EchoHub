import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import Landing from '../components/Landing'
import TextAndSvgSlider from '../components/ImageSlider'
import InsightsSection from '../components/ImageSlider'
import Footer from '../components/Footer'
import About from '../components/About'
import Feature from '../components/Feature'

function Home() {
  return (
    <div>
      <Navbar/>
      {/* <ImageSlider/> */}
    {/* <Landing/> */}
    {/* <TextAndSvgSlider/> */}
    <ImageSlider/>
    <About/>
    <Feature/>
    <Footer/>
    </div>
  )
}

export default Home
