import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/Navbar";

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default Layout;
