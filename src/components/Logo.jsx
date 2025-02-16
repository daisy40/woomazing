import { Link } from "react-router-dom";

import logo from "assets/images/icons/common/logo.svg";
import useSelectionGuard from "hooks/useSelectionGuard.jsx";

function Logo () {
  const { handlePointerEnter } = useSelectionGuard();

    return (
      <div onPointerEnter={handlePointerEnter} className="w-[138px] h-[25px] flex items-center gap-[11px]">
          <Link draggable={false} to="/">
            <img draggable={false} className="min-w-[25px] min-h-[25px] select-none" alt="Логотип" src={logo} />
          </Link>
          <span className="font-medium tracking-widest">WOMAZING</span>
      </div>
    )
  }
  
  export default Logo