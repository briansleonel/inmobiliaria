import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

interface Props {
    children: React.ReactNode;
}

interface NavLinkProps extends Props {
    to: string;
    onClick?: () => void;
}

interface NavMenuMobileProps extends Props {
    open: boolean;
}

export function NavContainer({ children }: Props) {
    return (
        <nav className="w-full fixed z-50 bg-neutral-950 text-neutral-50 p-4 md:px-16 lg:px-24 flex justify-between">
            {children}
        </nav>
    );
}

export function NavLinkTo({ to, children, onClick }: NavLinkProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `p-1 px-4 text-center w-full flex items-center justify-center text-2xl md:text-lg lg:text-base ${styles.navLink} ${
                    isActive ? styles.navLinkActive : ""
                }`
            }
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
}

export function NavMenu({ children }: Props) {
    return (
        <div className="hidden md:flex md:justify-between md:gap-8">
            {children}
        </div>
    );
}

export function NavMenuMobile({ children, open }: NavMenuMobileProps) {
    return (
        <div
            className={`flex flex-col gap-8 w-full h-screen bg-neutral-900 absolute top-0 p-4 pb-8 md:hidden transition-all duration-500 ${
                open ? "left-0" : "-left-full"
            }`}
        >
            {children}
        </div>
    );
}
