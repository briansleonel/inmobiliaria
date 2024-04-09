import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <h1>Navbar</h1>
            <Outlet />
        </>
    );
}

export default Layout;
