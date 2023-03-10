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
            <img src={AVTR1} alt="Avatar one" />
            
          </div>
          <h5 className='client__name'> Tefera Adefris </h5>
            <small className='clinet__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, esse aspernatur debitis, quaerat consequatur autem harum, corrupti reiciendis voluptatibus odit nemo distinctio perferendis ipsum in. Iusto quos modi autem impedit.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar one" />
            
          </div>
          <h5 className='client__name'> Tefera Adefris </h5>
            <small className='clinet__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, esse aspernatur debitis, quaerat consequatur autem harum, corrupti reiciendis voluptatibus odit nemo distinctio perferendis ipsum in. Iusto quos modi autem impedit.
            </small>
        </SwiperSlide >

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar one" />
            
          </div>
          <h5 className='client__name'> Tefera Adefris </h5>
            <small className='clinet__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, esse aspernatur debitis, quaerat consequatur autem harum, corrupti reiciendis voluptatibus odit nemo distinctio perferendis ipsum in. Iusto quos modi autem impedit.
            </small>
        </SwiperSlide >

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar one" />
            
          </div>
          <h5 className='client__name'> Tefera Adefris </h5>
            <small className='clinet__review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, esse aspernatur debitis, quaerat consequatur autem harum, corrupti reiciendis voluptatibus odit nemo distinctio perferendis ipsum in. Iusto quos modi autem impedit.
            </small>
        </SwiperSlide >

        
      </Swiper>

    </section>
  )
}

export default Testimonials