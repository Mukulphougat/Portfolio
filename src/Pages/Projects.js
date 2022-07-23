import {motion} from "framer-motion";
import app1 from "./mApp1.png"
export default function Projects(){
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "just", stiffness: 100, delay: 0.5}} className="flex-col w-full h-full">
            <div className={"flex-col border-2 dark:shadow-gray-500 border-black my-8 rounded-xl mx-20 shadow-sm shadow-cyan-200 items-center justify-center"}>
                <h1 className={"font-mono dark:text-white  font-bold p-4 underline text-3xl w-full "}>Projects</h1>
                <motion.div initial={{x: -750, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}} className={"flex-col align-middle p-4 w-full"}>
                    <div className={"flex-col w-full"}>
                        <h1 className={"font-mono dark:text-green-500 font-bold text-2xl w-full"}>Music APP</h1>
                        <div className={"flex flex-col sm:flex-row my-4 w-full"}>
                            <img src={app1} className={"sm:w-4/12 sm:h-64 w-full h-36"} alt={"Music APP"} />
                            <motion.div initial={{x: -1950, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}} className={"text-xl sm:mx-20 my-2 w-full text-justify dark:text-green-400 font-mono"}>
                                This is a music app where we can upload songs and play them.<br/>
                                And We can also add our own songs. And we can also delete our songs.<br/>
                                And we can also add to favorites. And we can also delete from favorites.<br/>
                                <a className={"text-blue-800 underline hover:no-underline"} href={"https://github.com/Mukulphougat/musicappnext"} target={"_blank"} rel={"noreferrer"}>GITHUB LINK</a>
                                <br/>
                                <span className={"text-2xl text-blue-500"}>Tech Used:</span> Spring Boot, Next Js, Mongo DB, Azure.
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    )

}
