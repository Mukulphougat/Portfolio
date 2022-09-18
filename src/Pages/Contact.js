import {motion} from "framer-motion";
import gmailImg from "./gmail.png"
import phone from "./icons8-phone-64.png"
import github from "./github.png"
import linkedIn from "./icons8-linkedin-48.png"
import helloWorld from "./download.gif"
export default function Contact(){
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "just", stiffness: 100, delay: 0.5}} className={"text-3xl mx-20 flex flex-col h-screen"}>
            <div className={"md:grid md:grid-cols-2 w-full place-items-center"}>
                <div className={"flex self-center md:w-2/3 w-full my-10 flex-row justify-between dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl items-center justify-center"}>
                    <img src={gmailImg} className={"mx-2 w-10 h-10"} alt={"Mail"}/>
                    <a href={"mailto:mukulphoughat@gmail.com"}><h1 className={"font-mono white mx-4 underline hover:no-underline"}>mukulphoughat@gmail.com</h1></a>
                </div>
                <div className={"flex self-center md:w-2/3 w-full my-10 flex-row dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl items-center justify-center"}>
                    <img src={phone} className={"w-10 h-10"} alt={"Phone"}/>
                    <a href={"tel:+917206301728"} target={"_blank"} rel={"noreferrer"}><h1 className={"font-mono white mx-4 underline hover:no-underline"}>+91-7206301728</h1></a>
                </div>
                <div className={"flex self-center md:w-2/3 w-full my-10 flex-row dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl items-center justify-center"}>
                    <img src={github} className={"w-10 h-10"} alt={"Github"}/>
                    <a href={"https://github.com/Mukulphougat?tab=repositories"} target={"_blank"} rel={"noreferrer"}><h1 className={"font-mono white mx-4 underline hover:no-underline"}>Github</h1></a>
                </div>
                <div className={"flex self-center md:w-2/3 w-full my-10 flex-row dark:text-green-500 font-mono h-24 my-2 w-fit rounded-xl items-center justify-center"}>
                    <img src={linkedIn} className={"w-10 h-10"} alt={"LinkedIn"}/>
                    <a href={"https://www.linkedin.com/in/mukul-phougat-602657193/"} target={"_blank"} rel={"noreferrer"}><h1 className={"font-mono white mx-4 underline hover:no-underline"}>LinkedIn</h1></a>
                </div>
            </div>
            <img  src={helloWorld} className={"md:w-1/2 rounded-lg self-center md:h-80"} alt={"Hello World!"}/>
        </motion.div>)
}
