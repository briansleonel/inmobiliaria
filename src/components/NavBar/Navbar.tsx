import { useState } from "react";
import {
    NavContainer,
    NavLinkTo,
    NavMenu,
    NavMenuMobile,
} from "./navbar.elements";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/20/solid";

function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <NavContainer>
            <span className="text-2xl uppercase">Inmobiliaria</span>
            <div
                className="flex items-center justify-center md:hidden text-white cursor-pointer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? (
                    <XMarkIcon className="w-8" />
                ) : (
                    <Bars3Icon className="w-8" />
                )}
            </div>
            <NavMenu>
                <NavLinkTo to="/">Home</NavLinkTo>
                <NavLinkTo to="/about">Nosotros</NavLinkTo>
                <NavLinkTo to="/contact">Contacto</NavLinkTo>
            </NavMenu>
            <NavMenuMobile open={showMobileMenu}>
                <div
                    className="flex justify-end md:hidden text-white cursor-pointer"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <XMarkIcon className="w-8" />
                </div>
                <NavLinkTo
                    to="/"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    Home
                </NavLinkTo>
                <NavLinkTo
                    to="/about"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    Nosotros
                </NavLinkTo>
                <NavLinkTo
                    to="/contact"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    Contacto
                </NavLinkTo>
            </NavMenuMobile>
        </NavContainer>
    );
}

export default NavBar;
