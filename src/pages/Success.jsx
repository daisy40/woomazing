import { Link } from "react-router-dom";

import Wrapper from "components/Wrapper.jsx";
import BaseButton from "components/BaseButton.jsx";

function Success() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-[130px]">
          <div className="h-[464px] relative">
            <div className="top-[269px] absolute flex flex-col justify-between h-[111px] ml-[3px]">
              <h1>Заказ получен</h1>
              <div className="flex">
                <span>Главная</span>
                <span>&nbsp;—&nbsp;</span>
                <span>Оформление заказа</span>
                <span>&nbsp;—&nbsp;</span>
                <span>Заказ получен</span>
              </div>
            </div>
          </div>
          <div className="h-[96px] flex items-center justify-between">
            <div className="flex items-center justify-between w-[488px] h-[96px]">
              <img className="my-[6px] mx-[12px] select-none" src="src/assets/images/icons/common/check.svg" />
              <div className="w-[360px] h-[76px] flex flex-col justify-between">
                <h3>Заказ успешно оформлен</h3>
                <p>Мы свяжемся с вами в ближайшее время!</p>
              </div>
            </div>
            <Link to="/">
              <BaseButton empty="true">Перейти на главную</BaseButton>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export { Success }