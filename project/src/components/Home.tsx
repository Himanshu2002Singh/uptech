import React from 'react'
import HeroSection from './HeroSection'
import AboutUs from './AboutUs'
import Courses from './Courses'
import WhyChooseUs from './WhyChooseus'
import Testimonials from './Testimonials'


function Home() {
  return (
    <div>
         <HeroSection />
      <AboutUs />
      
      <Courses/>
       <WhyChooseUs />
      
      <Testimonials/>
      
    </div>
  )
}

export default Home