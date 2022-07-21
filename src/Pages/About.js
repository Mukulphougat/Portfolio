import {motion} from "framer-motion";
import link from "./link.png";

export default function About() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                    transition={{type: "just", stiffness: 100, delay: 0.5}} className="w-full h-full font-bold">
            <div className={"flex-col my-1 rounded-xl mx-20 shadow-lg shadow-cyan-200 items-center justify-center"}>
                <motion.h1 className={"font-mono font-bold p-4 underline text-3xl w-full "}>Education</motion.h1>
                <div className={"mx-4"}>
                    <div className={'flex w-full align-middle'}>
                        <div className={"text-2xl font-mono my-auto"}>Chandigarh University</div>
                        <a className={"my-2 mx-2"} href={"https://www.cuchd.in/"} target={"_blank"}
                           rel={"noreferrer"}><img className={"w-4 h-4"} src={link} alt={"college"}/></a>
                    </div>
                    <div className={"text-xl font-mono"}>Master of Computer Applications</div>
                    <div className={"text-sm font-mono"}>2021-2023</div>
                </div>
            </div>
            <div className={"flex-col my-8 rounded-xl mx-20 shadow-lg shadow-cyan-200 items-center justify-center"}>
                <h1 className={"font-mono font-bold p-4 underline text-3xl w-full "}>Skills</h1>
                <div className={"mx-4 flex-col align-middle justify-center "}>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono font-thin p-1.5 w-fit text-2xl text-blue-500"}>Java
                    </motion.h1>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono font-thin p-1.5 w-fit text-2xl text-blue-500"}>Javascript
                    </motion.h1>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono font-thin p-1.5 w-fit text-2xl text-blue-500"}>MongoDb
                    </motion.h1>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono font-thin p-1.5 w-fit text-2xl text-blue-500"}>MySQL
                    </motion.h1>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono font-thin p-1.5 w-fit text-2xl text-blue-500"}>React
                    </motion.h1>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono font-thin p-1.5 w-fit text-2xl text-blue-500"}>Spring
                    </motion.h1>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono font-thin p-1.5 w-fit text-2xl text-blue-500"}>Express
                    </motion.h1>
                </div>
            </div>
        </motion.div>
    )
}
