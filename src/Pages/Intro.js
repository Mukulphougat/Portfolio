import profile from "../profile.JPG"
import {motion} from "framer-motion";

export default function Intro() {
    const myName = "<Mukul Phougat />";
    return (
        <motion.div className={"flex-col flex justify-center items-center"}>
            <div
                className={"absolute border my-52 [#333333] mt-52 animate-ping align-middle rounded-full w-[180px] h-[180px] mx-auto my-10 justify-self-center"}/>
            <div
                className={"absolute border my-52 [#333333] mt-52 animate-ping align-middle rounded-full w-[200px] h-[200px] mx-auto my-10 justify-self-center"}/>
            <div
                className={"absolute border my-52 [#333333] mt-52 animate-ping align-middle rounded-full w-[220px] h-[220px] mx-auto my-10 justify-self-center"}/>

            <div className={"relative my-52 flex justify-center align-middle items-center"}>
                <img src={profile}
                     className={"h-[220px] w-[220px] justify-self-center rounded-full"}
                     alt={"profile"}/>
                {/*<div className={"mx-auto w-full my-20"}>*/}
                {/*    <motion.p className={"font-mono dark:text-white mx-4 text-2xl w-full"} align={"center"}>*/}
                {/*        Hello My Name is Mukul*/}
                {/*    </motion.p>*/}
                {/*</div>*/}
            </div>
            <h1 className={"absolute bottom-12 sm:self-center text-white dark:text-blue-900 text-2xl font-mono"}>Hello My Name Is <span className={"dark:text-green-500"}>{myName}</span></h1>
        </motion.div>
    )
}
