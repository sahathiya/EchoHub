import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import Landing from '../components/Testimonials'
import TextAndSvgSlider from '../components/ImageSlider'
import InsightsSection from '../components/ImageSlider'
import Footer from '../components/Footer'
import About from '../components/About'
import Feature from '../components/Feature'
import Testimonials from '../components/Testimonials'

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
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default Home
