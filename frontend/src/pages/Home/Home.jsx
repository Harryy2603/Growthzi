import React from 'react'
import Header from '../../components/Header/Header'
import Launch from '../../components/Launch/Launch'
import Steps from '../../components/Steps/Steps'
import Solutions from '../../components/Solutions/Solutions'
import BusinessCategories from '../../components/BusinessCategories/BusinessCategories'
import Plans from '../../components/Plans/Plans'

const Home = () => {
  return (
    <div>
      <Header/>
      <Launch/>
      <Steps/>
      <Solutions/>
      <BusinessCategories/>
      <Plans/>
    </div>
  )
}

export default Home
