import React from 'react'
import HeroSection from './Hero'
import VisionMissionSection from './Vision'
import StepsSection from './Steps'
import ReasonsSection from './ReasonsSection'
import TeamSection from './Team'
import Testimonials from '../components/Testimonials'

function About() {
  return (
    <div className="bg-gray-50">
        <HeroSection/>
        <VisionMissionSection/>
        <StepsSection/>
        <ReasonsSection/>
        <TeamSection/>
        <Testimonials/>
    </div>
  )
}

export default About