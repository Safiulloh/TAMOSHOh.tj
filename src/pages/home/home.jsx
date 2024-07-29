import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Button from "@mui/material/Button";
import PaginationC from "../../components/pagination/pagination";
import { Link, Outlet } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StarsIcon from '@mui/icons-material/Stars';

import "../../App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../../reducers/todolist/todoListSlice";
import AutoplayC from "../../components/autoplay/autoplay";

const Home = () => {
  let dispatch = useDispatch();
  let data = useSelector((store) => store.todolist.data);
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  console.log(data);
  return (
    <div>
      <div className="w-[100%] h-[70px] bg-white drop-shadow-xl	 py-[50px] flex items-center">
        <img
          src={"src/assets/logo (5).svg"}
          alt=""
          className="w-[400px] h-[100px] mx-5"
        />

        <Button sx={{ color: "black" }} style={{ fontWeight: "bold" }}>
          Фильмы
        </Button>
        <Button sx={{ color: "black" }} style={{ fontWeight: "bold" }} >
          Мультфильмы
        </Button>
        <Button sx={{ color: "black" }} style={{ fontWeight: "bold" }}>
          ТОПы
        </Button>
        <Button sx={{ color: "black" }} style={{ fontWeight: "bold" }}>
          <Link to="login">Вход</Link>
        </Button>
      </div>

      <AutoplayC/>

      


      <div className="w-[100%]  drop-shadow-xl my-[100px] bg-gray-300">
        <div className="w-[100%] flex-col text-center  justify-center">
          <p className="text-[50px]">Новое на сайте</p>
          <div className="w-[90%] h-[5px] mx-auto bg-black" ></div>

        </div>

        <div className="flex w-[100%] justify-center flex-wrap">
          {data?.map((e) => {
            return (
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                
                modules={[EffectCube, Pagination]}
                className="mySwiper mx-[40px] my-[30px]"
                key={e.id}
              >
                <SwiperSlide className="relative">
                  <div className="absolute z-10 bg-black text-center w-[30px] h-[30px]">
                    <p className="text-[white]">{e.age}</p>
                  </div>
                  <div className="absolute z-10 mt-[110%] bg-black w-[100%] opacity-80 h-[70px] flex items-center justify-center">
                    <p className="text-[white]">{e.title}</p>
                  </div>

                  <img src={e.image} className="w-[100%] h-[100%] absolute" />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[100%] h-[100%] bg-white">
                    <div className="w-[100%] flex items-center justify-center">
                      <p className="text-[20px]">{e.title}</p>
                    </div>
                    <div className="w-[100%] text-center flex items-center justify-center">
                      <p>{e.about}</p>
                    </div>
                    <div className="flex w-[100%]  items-center justify-center">
                      <Link to={"video"}><PlayCircleIcon sx={{width:'100px',height:'100px'}}></PlayCircleIcon></Link>
                      <StarsIcon sx={{width:'100px',height:'100px'}}></StarsIcon>

                    </div>
                    <div className="w-[100%] h-[10px] bg-black">

                    </div>
                    <div className="flex w-[100%] h-[100px]  items-center justify-center">
                    <Button variant="outlined" sx={{width:'200px', height:'50px'}}> <Link to={e.id}>Подробнее</Link></Button>
                   

                    </div>
                    
                    
                  </div>
                </SwiperSlide>
              </Swiper>
            );
          })}
        </div>

        <div className="w-[100%] my-[50px] py-[50px]  justify-center flex">
          <PaginationC />
        </div>

        {/* <Outlet/> */}
      </div>

      

      <div className="w-[90%] m-[auto] my-10">
        <Marquee>
          <div className="flex">
            <img
              src={"src/assets/marqueeFiles/Marvel.svg"}
              alt=""
              className="w-[400px] h-[100px] mx-5"
            />
            <img
              src={"src/assets/marqueeFiles/Microsoft-Logo.wine.svg"}
              alt=""
              className="w-[400px] h-[100px] mx-5"
            />
            <img
              src={"src/assets/marqueeFiles/dreamworkd.svg"}
              alt=""
              className="w-[400px] h-[100px] mx-5"
            />
            <img
              src={"src/assets/marqueeFiles/TVBakhoristan.png"}
              alt=""
              className="w-[100px] h-[100px] mx-5"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
