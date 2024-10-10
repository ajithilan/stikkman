import { AppContext } from "../../../../App"
import { HamburgerIcon } from "./hamburgericon/hamburgericon"

export const MenuBtn = () => {
    const { visibleSection, redirect, setRedirect, lastScrollView } = AppContext();

    const handleRedirect = () => {
        if(redirect){
            setRedirect(false);
        }else if(visibleSection === 'section-4'){
            lastScrollView.current = visibleSection;
            setRedirect(true);
        }
    }

    return (
        <button
        className={`absolute top-11 left-8 ${ visibleSection === 'section-1' ? '-translate-y-16' : 'translate-y-0' } transition-all duration-800 z-50`}
        onClick={ handleRedirect }
        >
            <HamburgerIcon/>
        </button>
    )
}