import {motion} from "framer-motion";

export default function Contact(){
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: "just", stiffness: 100, delay: 0.5}} className="text-3xl h-screen font-bold underline">
            <h1>Contact</h1>
        </motion.div>)
}
