import { NavLink } from 'react-router-dom';

import Wrapper from "./Wrapper.jsx"
import Logo from "./Logo.jsx"
import instagram from "assets/images/icons/social/instagram.svg";
import facebook from "assets/images/icons/social/facebook.svg";
import twitter from "assets/images/icons/social/twitter.svg";
import payment from "assets/images/common/visa-mastercard.png";

import useSelectionGuard from "hooks/useSelectionGuard.jsx";

function Footer () {
    const { handlePointerEnter } = useSelectionGuard();

    return (
        <footer className="bg-[#F1EADC] h-[363px] mt-[130px] py-[101px]">
            <Wrapper>
                <div className="flex justify-between h-[161px]">
                    <div className="flex flex-col justify-between">
                        <Logo />
                        <div className="flex flex-col justify-between h-[66px] text-[13px]">
                            <span>© Все права защищены</span>
                            <a>Политика конфиденциальности</a>
                            <a>Публичная оферта</a>
                        </div>
                    </div>

                    <div className="flex justify-between w-[400px] text-[15px]">
                        <NavLink to="/">Главная</NavLink>
                        <div className="flex flex-col justify-between">
                            <NavLink to="/shop">Магазин</NavLink>
                            <ul className="flex flex-col justify-between h-[102px] text-[13px]">
                                <li>Пальто</li>
                                <li>Свитшоты</li>
                                <li>Кардиганы</li>
                                <li>Толстовки</li>
                            </ul>
                        </div>
                        <NavLink to="/about">О бренде</NavLink>
                        <NavLink to="/contacts">Контакты</NavLink>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                        <div className="flex flex-col justify-between h-[51px] text-right text-[15px]">
                            <span>+7 (495) 823-54-12</span>
                            <span>hello@womazing.com</span>
                        </div>


                        <div onPointerEnter={handlePointerEnter} className="flex gap-[12px]">
                            <a draggable={false} href="https://www.instagram.com">
                                <img draggable={false} className="select-none" src={instagram} alt="instagram" />
                            </a>
                            <a draggable={false} href="https://www.facebook.com">
                                <img draggable={false} className="select-none" src={facebook} alt="facebook" />
                            </a>
                            <a draggable={false} href="https://www.twitter.com">
                                <img draggable={false} className="select-none" src={twitter} alt="twitter" />
                            </a>
                        </div>

                        <img draggable={false} className="select-none" src={payment} />
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
  }
  
  export default Footer