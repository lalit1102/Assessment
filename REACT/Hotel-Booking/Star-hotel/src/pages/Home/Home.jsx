import React from 'react'
import HeroBanner from '../../components/herobanner/HeroBanner'
// import Rooms from '../../components/Rooms/Rooms'
import FeaturedDestination from '../../components/Rooms/FeaturedDestination'
import Amenities from '../../components/Amenities/Amenities'
import Review from '../../components/Reviews/Review'

const Home = () => {
  return (
    <div>
      <div className="container-fluid p-0">
      <section className="w-100 ">
        <HeroBanner />
      </section>
      <section className="w-100 ">
        <FeaturedDestination />
      </section>
      <section className="w-100 ">
        <Amenities />
      </section>
      <section className="w-100 ">
        <Review />
      </section>
      </div>
    </div>
  )
}

export default Home
