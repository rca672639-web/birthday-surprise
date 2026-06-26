import poem from "../../data/poem";
import useTypewriter from "../Typewriter/useTypeWriter";
import Typewriter from "../Typewriter/Typewriter";
import { motion } from "framer-motion";

export default function LovePoem() {

const{

displayText,

progress

}=useTypewriter(poem);

return(

<section

className="min-h-screen bg-gradient-to-b from-pink-50 to-[#FFF8F0] py-32"

>

<div className="max-w-4xl mx-auto px-6">

<motion.div

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

viewport={{
once:true
}}

className="bg-white rounded-[40px] shadow-2xl p-12"

>

<h2

className="text-center text-6xl mb-12"

style={{

fontFamily:"Great Vibes"

}}

>

One More Thing...

</h2>

<Typewriter

text={displayText}

progress={progress}

/>

</motion.div>

</div>

</section>

)

}