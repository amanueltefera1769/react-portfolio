import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
      
        <SwiperSlide className='testimonial' >
          <div className="client__avatar">
            <img alt="Avatar one" />
            
          </div>
          <h5 className='client__name'> Mr. Tefera Adefris </h5>
            <small className='clinet__review'>
            I was blown away by the quality of work that Mr. Amanuel Tefera produced. They were able to take my vision and turn it into a beautiful and functional website. I highly recommend them!
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
            
          </div>
          <h5 className='client__name'> Mr. Filimon Zelul </h5>
            <small className='clinet__review'>
            Working with Mr. Amanuel Tefera was a fantastic experience. They were able to deliver a website that exceeded my expectations and they were great to work with throughout the entire process.
            </small>
        </SwiperSlide >

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img  alt="Avatar one" />
            
          </div>
          <h5 className='client__name'> MS. Rahel </h5>
            <small className='clinet__review'>
            Thanks to Mr. Amanuel Tefera, my website is now a true reflection of my brand. They were able to take my ideas and turn them into a website that is both beautiful and functional. I couldn't be happier with the results!
            </small>
        </SwiperSlide >
        
      </Swiper>

    </section>
  )
}

export default Testimonials