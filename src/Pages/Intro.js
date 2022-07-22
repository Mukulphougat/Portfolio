import profile from "../profile.JPG"
import {motion} from "framer-motion";

export default function Intro() {
    return (
        <motion.div className={"flex-col w-full items-center align-middle"}>

            <motion.img src={profile}
                 whileHover={{scale: 1.1}}
                 className={"h-72 w-72 dark:shadow-none dark:border-blue-400 align-middle border-4 border-amber-300 shadow-xl shadow-amber-200 my-8 justify-self-center rounded-full mx-auto"}
                 alt={"profile"}/>
            <div className={"mx-auto w-1/2 my-20"}>
                <motion.p className={"font-mono dark:text-white mx-4 text-2xl w-full"} align={"center"}>
                    Hello My Name is Mukul.<br/>I am a Front End Web Developer.<br/>
                    I have a passion for creating web applications.
                </motion.p>
            </div>

        </motion.div>
    )
}
