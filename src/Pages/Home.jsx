import React from 'react'
import Header from '../Comportant/Header/Header'
import HeroSlider from '../Comportant/Hero-slider/HeroSlider'
import PopularMenu from '../Comportant/Popular-menu/PopularMenu'
import ChooseUs from '../Comportant/Choose-me/ChooseUs'
import MenuPack from '../Comportant/menu-pack/MenuPack'
import Testimonial from '../Comportant/Testimonials/Testimonial'
import Download from '../Comportant/Download-Secstion/Download'
import Footer from '../Comportant/Footer/Footer'
const Home = () => {
  return (
    <>
      <Header/>
      <HeroSlider/>
      <PopularMenu/>
      <ChooseUs/>
      <MenuPack/>
      <Testimonial/>
      <Download/>
      <Footer/>
    </>
  )
}

export default Home
// Home ne App.js ma import kairu che // 