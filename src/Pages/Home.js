import Intro from "./Intro";
import {motion} from "framer-motion";
export default function Home(){
    return (
        <motion.div initial={{ y: 550 }} animate={{ y: 0 }} exit={{ y: -500}} transition={{ type: "just", stiffness: 100, delay: 0.8}} className={"flex-col h-screen align-middle items-center"}>
            <Intro />
        </motion.div>
    )
}
