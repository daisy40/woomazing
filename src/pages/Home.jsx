import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Arrow from "components/icons/Arrow.tsx"
import Wrapper from "components/Wrapper.jsx"
import BaseButton from "components/BaseButton.jsx"
import ShopItem from "components/ShopItem.tsx"
import PrincipleCard from "components/PrincipleCard.tsx"
import OfferSwiper from "components/OfferSwiper.jsx"

function Home() {
  return (
    <div className="flex flex-col gap-[130px]">
      <section className="h-[826px] w-full relative">
        <Wrapper className="relative">
          <OfferSwiper />
          <div className="absolute right-0 top-[120px] select-none">
            <img alt="Девушка в пальто и тёмных очках" draggable={false} className="z-20 relative" src="src/assets/images/hero/main-photo.jpg" />
            <img alt="Девушка в шляпе" draggable={false} className="z-21 absolute right-0 top-[110px] translate-x-1/2" src="src/assets/images/hero/secondary-photo.jpg" />
            <img alt="Девушка с поднятой головой и закрытыми глазами" draggable={false} className="z-21 absolute bottom-[-60px] left-[-130px]" src="src/assets/images/hero/tertiary-photo.jpg" />
          </div>
        </Wrapper>
        <div className="absolute bg-[#F1EADC] w-[44.0625%] h-full top-0 right-0" />
      </section>
      <section id="new-collection">
        <Wrapper>
          <h2>Новая коллекция</h2>
          <div className="flex flex-col items-center">
            <div className="flex lg:flex-row flex-col justify-center gap-[15px] mt-[92px] mb-[65px]">
              <ShopItem imageFileName="tshirt-usa.png" productName="Футболка USA" price={229} newPrice={129} />
              <ShopItem imageFileName="glow-swimsuit.png" productName="Купальник Glow" price={129} />
              <ShopItem imageFileName="sweet-shot.png" productName="Свитшот Sweet Shot" price={129} />
            </div>
            <Link draggable={false} to="/shop">
              <BaseButton empty="true">Открыть магазин</BaseButton>
            </Link>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <h2>Что для нас важно</h2>
          <div className="flex flex-col lg:flex-row gap-[15px] mt-[92px] items-center">
            <PrincipleCard header="Качество" text="Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества" iconFileName="quality.svg" />
            <PrincipleCard header="Скорость" text="Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах" iconFileName="gear.svg" />
            <PrincipleCard header="Ответственность" text="Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing" iconFileName="hand.svg" />
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <h2>Команда мечты Womazing</h2>
          <div className="h-[487px] mt-[92px] flex justify-between items-center">
            <div className="flex items-center select-none">
              <Swiper className="h-[487px] w-[729px]"
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop={true}
                simulateTouch={false}
                speed={1000}
                pagination={{ clickable: true, type: "bullets", el: "#containerForBullets", bulletClass: "swiper-custom-bullet", bulletActiveClass: "swiper-custom-bullet-active" }}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false
                }}
              >
                <SwiperSlide><img src="src/assets/images/dream-team/three-womans.jpg" /></SwiperSlide>
                <SwiperSlide><img src="src/assets/images/dream-team/womans-and-sun.jpg" /></SwiperSlide>
                <SwiperSlide><img src="src/assets/images/dream-team/womans.jpg" /></SwiperSlide>
              </Swiper>
            </div>
            <div className="w-[255px] h-[331px] flex flex-col justify-between">
              <h3>Для каждой</h3>
              <p className="text-[17px] leading-[23.8px]">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.<br /><br />
                Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
              <Link className="font-medium text-[#6E9C9F]" to="/about">Подробнее о бренде</Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  )
}

export { Home }