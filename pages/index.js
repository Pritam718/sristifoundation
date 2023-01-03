import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Gallery from '../components/Gallery'
import Event from '../components/Event'
import About from '../components/About'
import Place from '../components/Place'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Event/>
      <Gallery/>
      <About/>
      <Place/>
      <Footer/>
    </div>
  )
}

export default Index
