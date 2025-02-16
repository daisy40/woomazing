import { NavLink, Link } from 'react-router-dom';

import Wrapper from "./Wrapper.jsx"
import Logo from "./Logo.jsx"
import Phone from "./icons/Phone.jsx";
import cart from 'assets/images/icons/common/cart.svg';

import useSelectionGuard from "hooks/useSelectionGuard.jsx";

function Header() {
    const { handlePointerEnter } = useSelectionGuard();

    return (
        <header className="bg-inherit absolute h-[28px] w-full z-100">
            <Wrapper>
                <div className="flex mt-[51px] justify-between">
                    <Logo />
                    <nav>
                        <ul className="flex w-[400px] justify-between text-[15px]">
                            <li>
                                <NavLink to="/">Главная</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop">Магазин</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">О бренде</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacts">Контакты</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center">
                        <Phone />
                        <div className="mr-[67px] ml-[9px] text-[15px]">+7 (495) 823-54-12</div>
                        <Link
                            onPointerEnter={handlePointerEnter}
                            draggable={false}
                            to="/cart"
                            aria-label="Перейти в корзину"
                        >
                            <img draggable={false} className="select-none min-h-[24px] min-w-[24px]" src={cart} alt="Корзина" />
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header