import React from 'react'
import Header from '../../components/Header/Header'
import Steps from '../../components/Steps/Steps'
import Solutions from '../../components/Solutions/Solutions'
import BusinessCategories from '../../components/BusinessCategories/BusinessCategories'
import Plans from '../../components/Plans/Plans'
import FAQs from '../../components/FAQs/FAQs'
import Reviews from '../../components/Reviews/Reviews'
import Footer from '../../components/Footer/Footer'
import WhyChoose from '../../components/WhyChoose/WhyChoose'

const Home = () => {
  return (
    <div>
      <Header/>
      <WhyChoose/>
      <Steps/>
      <Solutions/>
      <BusinessCategories/>
      <Plans/>
      <FAQs/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
