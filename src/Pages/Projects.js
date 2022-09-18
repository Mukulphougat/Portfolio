import {motion} from "framer-motion";
import app1 from "./mApp1.png"
import app2 from "./Icons/mApp2.png"
export default function Projects(){
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "just", stiffness: 100, delay: 0.5}} className="flex-col w-full h-full">
            <div className={"flex-col my-8 rounded-xl mx-20 items-center justify-center"}>
                <div className={"w-full flex flex-col z-20 overflow-y-hidden"}>
                    <div className={"w-full flex-shrink-0 snap-center h-[200px] flex flex-row space-y-5 justify-center align-middle p-20"}>
                        <img  src={app1} className={"rounded-xl sm:w-4/12 mx-auto align-middle sm:h-64 w-full h-36"} alt={"Music APP"} />
                        <div className={"text-xl mx-8 sm:w-full align-middle h-64 w-full mx-auto my-2 text-justify dark:text-green-400 font-mono"}>
                            This is a music app where we can upload songs and play them.
                            And We can also add our own songs. And we can also delete our songs.
                            And we can also add to favorites. And we can also delete from favorites.<br/>
                            <a className={"text-blue-800 underline hover:no-underline"} href={"https://github.com/Mukulphougat/musicappnext"} target={"_blank"} rel={"noreferrer"}>GITHUB LINK</a>
                            <br/>
                            <span className={"text-2xl text-blue-500"}>Tech Used:</span> Spring Boot, React Js, Graph QL, Mongo DB, Azure.
                        </div>
                    </div>
                    <div className={"w-full flex-shrink-0 my-20 snap-center h-[300px] flex flex-row space-y-5 justify-center align-middle p-20"}>
                        <img  src={app2} className={"rounded-xl sm:w-4/12 mx-auto align-middle sm:h-64 w-full h-36"} alt={"Music APP"} />
                        <div className={"text-xl mx-8 sm:w-full align-middle h-64 w-full mx-auto my-2 text-justify dark:text-green-400 font-mono"}>
                            CSV File Organizer is a web application where we
                            can upload a CSV file and it will organize the data
                            in the file and will show the data in a table.
                            We can also delete the CSV file.<br/>
                            <a className={"text-blue-800 underline hover:no-underline"} href={"https://github.com/Mukulphougat/csvfileviewer"} target={"_blank"} rel={"noreferrer"}>GITHUB LINK</a>
                            <br/>
                            <span className={"text-2xl text-blue-500"}>Tech Used:</span> React Js, Redux, Tailwind CSS.
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )

}
