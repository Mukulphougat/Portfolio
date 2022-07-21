import {motion} from "framer-motion";

export default function Projects(){
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "just", stiffness: 100, delay: 0.5}} className="flex w-full h-full">
            <div className={"flex-col border-2 border-black my-8 rounded-xl mx-20 shadow-lg shadow-cyan-200 items-center justify-center"}>
                <h1 className={"font-mono font-bold p-4 underline text-3xl w-full "}>Projects</h1>
                <motion.div initial={{x: -550, overflow: "hidden"}} animate={{x: 0}} transition={{delay: .8}} className={"flex-col align-middle p-4 w-full"}>
                    <div className={"flex-row w-full"}>
                        <h1 className={"font-mono font-bold text-2xl w-full"}>Music APP</h1>

                    </div>
                </motion.div>
            </div>
        </motion.div>
    )

}
