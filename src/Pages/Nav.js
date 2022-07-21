import {Link} from "react-router-dom";
import logos from "../meetup.png";
import "./comps.css"
import {motion} from "framer-motion";
import about from "./info.png";
import pImage from "./projects.png";
import cImage from "./contact.png";
import resume from "./resume.png";
import github from "./github.png";
export default function Nav(){
    return(
        <div className="flex-col bg-gray-700 fixed bg-white top-0 h-full w-10 align-middle justify-between">

            <Link to={"/"} className="text-2xl mx-auto fixed top-2 hover:bg-opacity-50 "><motion.img whileTap={{ scale: 0.8 }} src={logos} className={"w-10 h-10"} alt={"logo"}/></Link>
            <div className={"flex-col mx-1 fixed bottom-5 justify-center align-middle my-1"}>
                <Link to={"/about"}><motion.div whileTap={{ scale: 0.8 }} className="my-8"><img src={about} alt={"about"} className={"w-8 h-8"}/></motion.div></Link>
                <Link to={"/projects"}><motion.div whileTap={{ scale: 0.8 }} className="my-8"><img src={pImage} alt={"project"} className={"w-8 h-8"}/></motion.div></Link>
                <Link to={"/contact"}><motion.div whileTap={{ scale: 0.8 }} className="my-8"><img src={cImage} alt={"contact"} className={"w-8 h-8"}/></motion.div></Link>
                <motion.div whileTap={{ scale: 0.8 }} className="my-8"><a href={"https://drive.google.com/file/d/1BmgNfhjxUkyFJQdw1QX2DVrBlJgzt_gn/view?usp=sharing"} target={"_blank"} rel={"noreferrer"} ><img src={resume} className={"w-8 h-8"} alt={"resume"}/></a></motion.div>
                <motion.div whileTap={{ scale: 0.8 }} ><a href={"https://github.com/Mukulphougat"} target={"_blank"} rel={"noreferrer"} ><img src={github} className={"w-8 h-8"} alt={"resume"}/></a></motion.div>
            </div>
        </div>
    )
}
