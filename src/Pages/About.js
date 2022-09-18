import {motion} from "framer-motion";
import link from "./link.png";
import graphql from "./Icons/graphql.228x256.png";
import express from "./Icons/icons8-express-js-50.png";
import java from "./Icons/icons8-java-48.png";
import js from "./Icons/icons8-javascript-48.png";
import mongo from "./Icons/icons8-mongodb-48.png";
import reactIcon from "./Icons/icons8-react-80.png";
import springBoot from "./Icons/spring.256x256.png";
import mysqlIcon from "./Icons/icons8-mysql-48.png";
import reduxIcon from "./Icons/redux-original.256x244.png";
import tailwindIcon from "./Icons/tailwind-css.256x154.png";
export default function About() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                    transition={{type: "just", stiffness: 100, delay: 0.5}} className="w-full h-full font-bold">
            <div className={"flex-col my-1 rounded-xl my-2 mx-20 items-center justify-center"}>
                <motion.h1 className={"font-mono uppercase font-thin dark:text-white p-4 text-3xl w-full "}>Education</motion.h1>
                <div className={"mx-4"}>
                    <div className={'flex w-full align-middle'}>
                        <div className={"text-2xl dark:text-green-500 font-mono my-auto"}>Chandigarh University</div>
                        <a className={"my-2 mx-2"} href={"https://www.cuchd.in/"} target={"_blank"}
                           rel={"noreferrer"}><img className={"w-4 h-4"} src={link} alt={"college"}/></a>
                    </div>
                    <div className={"text-xl dark:text-green-500 font-mono"}>Master of Computer Applications</div>
                    <div className={"text-sm dark:text-green-500 font-mono"}>2021-2023</div>
                </div>
            </div>
            {/*<div className={"flex-col h-0 my-8 rounded-xl mx-20 items-center justify-center"}>*/}
            {/*    <hr className={"border-green-500"}/>*/}
            {/*</div>*/}
            <div className={"flex-col my-8 rounded-xl mx-20 items-center justify-center"}>
                <h1 className={"font-mono dark:text-white font-thin p-4 uppercase text-3xl w-full "}>Skills</h1>
                <div className={"mx-4 sm:grid-cols-4 grid grid-cols-3 align-middle justify-center "}>
                    <motion.img src={java} alt={"JAVA"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={js} alt={"JavaScript"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={mongo} alt={"MongoDb"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={mysqlIcon} alt={"MySqlIcon"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={reactIcon} alt={"ReactIcon"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"w-14 h-14 font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={springBoot} alt={"SpringBoot"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"w-14 h-14 font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={express} alt={"ExpressIcon"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={reduxIcon} alt={"ReduxIcon"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                                className={"w-14 h-14 font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={graphql} alt={"GraphQlIcon"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                                className={"w-14 h-14 font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                    <motion.img src={tailwindIcon} alt={"TailwindIcon"} initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                                className={"w-16 h-14 font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}/>
                </div>
            </div>

            <div className={"flex-col my-8 rounded-xl mx-20 items-center justify-center"}>
                <h1 className={"font-mono dark:text-white font-thin uppercase p-4 text-3xl w-full "}>Coding Profiles</h1>
                <div className={"mx-4 flex-col align-middle justify-center "}>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}>
                        <a href={"https://leetcode.com/mukulphougat/"} target={"_blank"} rel={"noreferrer"} className={"uppercase uppercase text-blue-500 underline"}>Leetcode</a>
                    </motion.h1>
                    <motion.h1 initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}}
                               className={"font-mono dark:text-green-500 font-thin p-1.5 w-fit text-2xl text-blue-500"}>
                        <a href={"https://auth.geeksforgeeks.org/user/mukulphoughat/practice/"} target={"_blank"} rel={"noreferrer"} className={"uppercase text-blue-500 underline"}>GeeksForGeeks</a>
                    </motion.h1>

                </div>
            </div>
        </motion.div>
    )
}
