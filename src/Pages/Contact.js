import {motion} from "framer-motion";
import gmailImg from "./gmail.png"

export default function Contact(){
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "just", stiffness: 100, delay: 0.5}} className={"text-3xl mx-20 flex flex-col h-screen"}>
            <div className={"flex self-center my-10 flex-row dark:shadow-gray-500 justify-between dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl shadow-sm shadow-cyan-200 items-center justify-center"}>
                <img src={gmailImg} alt={"Mail"}/>
                <a href={"mailto:mukulphoughat@gmail.com"}><h1 className={"font-mono white mx-4 underline hover:no-underline"}>mukulphoughat@gmail.com</h1></a>
            </div>
            <div className={"flex self-center my-10 flex-row dark:shadow-gray-500 dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl shadow-sm shadow-cyan-200 items-center justify-center"}>
                Phone
            </div>
            <div className={"flex self-center my-10 flex-row dark:shadow-gray-500 dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl shadow-sm shadow-cyan-200 items-center justify-center"}>
                Github
            </div>
            <div className={"flex self-center my-10 flex-row dark:shadow-gray-500 dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl shadow-sm shadow-cyan-200 items-center justify-center"}>
                LinkedIn
            </div>
        </motion.div>)
}
