import {motion} from "framer-motion";
import Intro from "./Intro";

export default function About(){
    return(
        <motion.div initial={{ y: 550 }} animate={{ y: 0 }} exit={{ y: -500}}  transition={{ type: "just", stiffness: 100, delay: 0.8}} className="text-3xl h-screen font-bold underline">
            <Intro />
        </motion.div>
    )
}
