import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

import insurance from './assets/images/insurance.jpg';
import discounts from './assets/images/discounts.jfif';
import guide from './assets/images/guide.jpg';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //aos customizations
    AOS.init({
      duration: 3000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  //redirect to packages page
  const handleMoreClick = () => {
    navigate('/packages');
  };
  return (
    <Fragment>
      <div class="home-top-slide-sec">
        <div class="container inner-container">
          <div class="row">
            <div class="col-lg-6">
              <div className="hero-container">
                <text className="main-topic" data-aos="fade-up">
                  Would you like to travel
                </text>
                <text className="main-topic" data-aos="fade-up">
                  {' '}
                  with us ?
                </text>
              </div>
              <div className="sub-topic-container">
                <p className="sub-topic">
                  Explore more about the travelling packages
                </p>
              </div>
              <button className="more-btn" onClick={handleMoreClick}>
                More
              </button>
            </div>
            <div className="col-lg-6">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="slide-wrapper">
                      <img
                        src={insurance}
                        alt="slide-img"
                        className="slide-img"
                      />
                      <p className="slide-txt">Travel Insurance</p>
                      <p className="para-txt">
                        Protect your adventures with our comprehensive travel
                        insurance. Enjoy peace of mind on your journey, knowing
                        you're safeguarded against unexpected events. Travel
                        smart, travel secure.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-wrapper">
                      <img src={guide} alt="slide-img" className="slide-img" />
                      <p className="slide-txt">Tour Guide</p>
                      <p className="para-txt">
                        Enhance your travel experience with our professional
                        tour guides. Our packages include knowledgeable guides
                        who bring destinations to life with insider tips and
                        personalized recommendations.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide-wrapper">
                      <img
                        src={discounts}
                        alt="slide-img"
                        className="slide-img"
                      />
                      <p className="slide-txt">Discounts</p>
                      <p className="para-txt">
                        Unlock amazing savings on your next adventure with our
                        special travel package discounts. Book now and take
                        advantage of our unbeatable offers for an unforgettable
                        trip.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
