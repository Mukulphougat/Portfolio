import Intro from "./Intro";
import {motion} from "framer-motion";

export default function Home(){
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "just", stiffness: 100, delay: 0.5}} className={"flex-col w-full h-full dark:bg-gray-900 align-middle items-center"}>
            <Intro />
        </motion.div>
    )
}
