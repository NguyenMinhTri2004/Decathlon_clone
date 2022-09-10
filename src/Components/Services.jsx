import React from 'react'
import {SectionBody} from './Section'
import Section from './Section'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Services = () => {

  const ServicesArray = [
    

      {
          img : <img src= {require('../assets/Img/service-icon-1.png')} alt="" />,
          displayName : "Bảo Hành Tối Thiểu 2 Năm"
      },

      {
          img : <img src= {require('../assets/Img/service-icon-2.png')} alt="" />,
          displayName : "Giao Hàng Miễn Phí Tại Điểm Click & Collect"
      },

      {
          img : <img src= {require('../assets/Img/service-icon-3.png')} alt="" />,
          displayName : "Miễn Phí Vận Chuyển Cho Đơn Trên 899k"
      },

      {
          img : <img src= {require('../assets/Img/service-icon-4.png')} alt="" />,
          displayName : "Trả Hàng Trong 30 Ngày"
      }
  ];  

  return (
        <Section>
            <SectionBody>   


            <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween= {0}
      slidesPerView= {4}
    //   onSlideChange={() => console.log('slide change')}
     

      breakpoints={{

        320 : {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
    >
       

                       {
                           ServicesArray.map((item, index) => (
                               <SwiperSlide key = {index} >

                               <div className="service__list__item">
                                   <div className="service__list__item__img">
                                        {item.img}
                                    </div>
                                   <p>{item.displayName}</p>
                               </div>
                               </SwiperSlide>
                           ))
                        }
        

         </Swiper>
                
            </SectionBody>
        </Section>
  )
}

export default Services