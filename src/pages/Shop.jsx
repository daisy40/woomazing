import Wrapper from "components/Wrapper.jsx";
import CategoryButton from "components/CategoryButton.jsx";
import ShopItem from "components/ShopItem.tsx";
import Arrow from "components/icons/Arrow.tsx";

function Shop() {
  return (
    <>
      <Wrapper>
        <div className="h-[464px] relative">
          <div className="top-[269px] absolute flex flex-col justify-between h-[111px] ml-[3px]">
            <h1>Магазин</h1>
            <div className="flex">
              <span>Главная</span>
              <span>&nbsp;—&nbsp;</span>
              <span>Магазин</span>
            </div>
          </div>
        </div>
        <div className="min-h-[2242px] mt-[130px]">
          <div className="flex gap-[10px] mb-[92px]">
            <CategoryButton>Все</CategoryButton>
            <CategoryButton>Пальто</CategoryButton>
            <CategoryButton>Свитшоты</CategoryButton>
            <CategoryButton>Кардиганы</CategoryButton>
            <CategoryButton>Толстовки</CategoryButton>
          </div>
          <div className="flex flex-col gap-[65px]">
            <p className="text-[#808080]">Показано 9 из 12 товаров</p>

            <div className="flex flex-wrap justify-center gap-[15px]">
              <ShopItem imageFileName="tshirt-usa.png" productName="Футболка USA" price={229} newPrice={129} />
              <ShopItem imageFileName="glow-swimsuit.png" productName="Купальник Glow" price={129} />
              <ShopItem imageFileName="sweet-shot.png" productName="Свитшот Sweet Shot" price={129} />
            </div>

            <div className="flex flex-wrap justify-center gap-[15px]">
              <ShopItem imageFileName="tshirt-usa.png" productName="Футболка USA" price={229} newPrice={129} />
              <ShopItem imageFileName="glow-swimsuit.png" productName="Купальник Glow" price={129} />
              <ShopItem imageFileName="sweet-shot.png" productName="Свитшот Sweet Shot" price={129} />
            </div>

            <div className="flex flex-wrap justify-center gap-[15px]">
              <ShopItem imageFileName="tshirt-usa.png" productName="Футболка USA" price={229} newPrice={129} />
              <ShopItem imageFileName="glow-swimsuit.png" productName="Купальник Glow" price={129} />
              <ShopItem imageFileName="sweet-shot.png" productName="Свитшот Sweet Shot" price={129} />
            </div>
            <p className="text-[#808080]">Показано 9 из 12 товаров</p>
            <div>

            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export { Shop }