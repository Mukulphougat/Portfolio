import {Link} from "react-router-dom";
import logos from "../meetup.png";
import "./comps.css"
import {motion} from "framer-motion";

export default function Nav(){
    return(
        <div className="flex h-10 w-full shadow-lg align-middle shadow-cyan-50 justify-between ">

            <Link to={"/"} className="text-2xl mx-2 font-bold underline hover:bg-opacity-50 sm:no-underline md:text-xl md:mx-1"><motion.img whileTap={{ scale: 0.8 }} src={logos} className={"sm:w-10 sm:h-10"} alt={"logo"}/></Link>
            <div className={"flex justify-center my-1 mx-8"}>
                <Link to={"/about"}><motion.h1 whileTap={{ scale: 0.8 }} className="text-xl mx-10 font-mono font-bold underline sm:no-underline ">About</motion.h1></Link>
                <Link to={"/projects"}><motion.h1 whileTap={{ scale: 0.8 }} className="text-xl mx-10 font-mono font-bold underline sm:no-underline ">Projects</motion.h1></Link>
                <Link to={"/contact"}><motion.h1 whileTap={{ scale: 0.8 }} className="text-xl mx-10 font-mono font-bold underline sm:no-underline ">Contact</motion.h1></Link>
            </div>
        </div>
    )
}
