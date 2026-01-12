import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.PNG';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Jacob R.',
    review:
      "I’m pleased with your contribution and appreciate your initiative in handling larger tasks and increased responsibilities.",
  },
  {
    avatar: AVTR2,
    name: 'Bridget G.',
    review:
      "You are the best. Thank you for all your hard work and strong commitment to the team.",
  },
  {
    avatar: AVTR3,
    name: 'Carley T.',
    review:
      "Watching you grow into the incredible web developer you are has been seriously inspiring.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="sec-testimonials__container">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="clientphoto" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
