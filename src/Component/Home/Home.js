import React from 'react'
import Video from './Video'
import Content from './Content'
import AboutUs from './AboutUs'
import Testimonials from '../Company/Carrer/Testimonials'
import TrustedBrands from './TrustedBrands'
import SocialMedia from '../Product/SocialMedia'
import Industries from '../Product/BulkSms/Industries'
import Achievements from '../Resources/Services/Achievements'

const Home = () => {
  return (
    <>
    <Video/>
    <AboutUs/>
    <TrustedBrands/>
    <Content/>
    <SocialMedia/>
    <Industries/>
    <Achievements/>
    <Testimonials/>
    </>
  )
}

export default Home
