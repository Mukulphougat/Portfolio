import {Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import {Routes, useLocation} from "react-router";
import {AnimatePresence} from "framer-motion";

export default function AnimatedRoutes(){
    const location = useLocation();
    return (
        <AnimatePresence layout>
            <Routes location={location} key={location.pathname}>
                <Route path="/" key={"child"} element={<Home />}></Route>
                <Route path="/about" key={"child"} element={<About />}></Route>
                <Route path="/projects" key={"child"} element={<Projects />}></Route>
                <Route path="/contact" key={"child"} element={<Contact />}></Route>
            </Routes>
        </AnimatePresence>
    )
}
