import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

import Arrow from "components/icons/Arrow.tsx";
import BaseButton from "components/BaseButton.jsx";

import useSelectionGuard from "hooks/useSelectionGuard.jsx";

const slidesData = [
    {
        title: "Новые поступления в этом сезоне",
        description: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
    },
    {
        title: "Что-то новенькое. Мы заждались тебя.",
        description: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
    },
    {
        title: "Легендарные новинки",
        description: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
    }
];

function OfferSwiper () {
    const { handlePointerEnter } = useSelectionGuard();

    return (
        <div className="w-[563px] top-[265px] z-20 absolute pl-[15px] pb-[14px]">

            <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            loop={true}
            simulateTouch={false}
            speed={1000}
            pagination={{ clickable: true, type: "bullets", el: "#containerForBullets", bulletClass: "swiper-custom-bullet", bulletActiveClass: "swiper-custom-bullet-active"}}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false
            }}
            >
                {slidesData.map((p, index) => (
                    <SwiperSlide key={index}>
                    <div className="flex flex-col gap-[45px]">
                        <h1>{p.title}</h1>
                        <p className="text-right w-[385px] h-[84px] text-[20px] font-normal leading-[28px]">{p.description}</p>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex mt-[52px] relative left-[90px]">
                <button
                    onPointerEnter={handlePointerEnter}
                    aria-label="Перейти к новым поступлениям"
                    draggable={false}
                    className="bg-[#6E9C9F1A] cursor-pointer outline-1 outline-[#6E9C9F1A] w-[67px] h-[67px] inline-flex items-center justify-center"
                    onClick={() => document.getElementById("new-collection")?.scrollIntoView({behavior: "smooth"})}
                >
                    <Arrow direction="down" color="#6E9C9F" />
                </button>
                <Link draggable={false} to="/shop">
                    <BaseButton>Открыть магазин</BaseButton>
                </Link>
            </div>
            
            <div id="containerForBullets">
                {slidesData.map((_, index) => (
                        <button key={index} />
                    ))}
            </div>
        </div>
      );
    };

export default OfferSwiper;