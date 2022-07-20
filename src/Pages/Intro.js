import profile from "../profile.JPG"
import {motion} from "framer-motion";

export default function Intro(){
    return(
        <motion.div className={"flex-col items-center align-middle"}>
            <img src={profile} className={"h-72 w-72 border-4 border-amber-300 shadow-xl shadow-amber-200 my-8 justify-self-center rounded-full mx-auto"} alt={"profile"}/>
            <motion.p className={"font-mono text-2xl my-8"}>
                Hello My Name is Mukul. <br/>I am a Full Stack Web Developer.<br/>
                I have a passion for creating web applications.
            </motion.p>
        </motion.div>
    )
}
