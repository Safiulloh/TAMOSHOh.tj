import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import classes from './autoplay.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function AutoplayC() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}

        
        style={{backgroundColor:"white", width:'100%', marginTop:''}}
        className='bg-[white] w-[100%] h-[800px] my-[50px]'
      >
        <SwiperSlide>
            <img src="https://pic.rutubelist.ru/video/dc/d7/dcd7d87998a230aa02f11909ca9c2551.jpg" alt="" className='w-[100%] h-[100%]'  />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ytimg.com/vi/QA5j_ygU4oE/maxresdefault.jpg" alt="" className='w-[100%] h-[100%]' />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://www.soyuz.ru/public/uploads/files/2/7484279/202207111609222d7e1e3837.jpg" alt="" className='w-[100%] h-[100%]' />

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://avatars.dzeninfra.ru/get-zen_doc/1931664/pub_5e86ef3c98b4c86819a65493_5e86f43668b5133828438fe6/scale_1200" alt="" className='w-[100%] h-[100%]' />

        </SwiperSlide><SwiperSlide>
        <img src="https://i.pinimg.com/originals/95/83/09/9583094d647bed9f992cc64f6b474a11.jpg" alt="" className='w-[100%] h-[100%]' />

        </SwiperSlide><SwiperSlide>
        <img src="https://avatars.mds.yandex.net/i?id=6ccc1ff88f52d07c8638640e6989d183177d970d-11379499-images-thumbs&n=13" alt="" className='w-[100%] h-[100%]' />

        </SwiperSlide><SwiperSlide>
        <img src="https://cdnstatic.rg.ru/uploads/images/161/77/60/3_506a5928.jpeg" alt="" className='w-[100%] h-[100%]' />

        </SwiperSlide>
      </Swiper>
    </>
  );
}
