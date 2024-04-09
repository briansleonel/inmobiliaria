import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";
import AboutUsPage from "../pages/AboutUs";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutUsPage />} />
            </Route>
        </>
    )
);
