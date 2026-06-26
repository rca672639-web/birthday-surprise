import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Celebration(){

return(

<section

className="
relative
min-h-screen
overflow-hidden
bg-gradient-to-br
from-[#6F4E37]
via-[#4B2E2B]
to-black
flex
items-center
justify-center
"

>

<motion.div

initial={{
scale:0
}}

whileInView={{
scale:1
}}

transition={{
duration:1
}}

className="text-center"

>

<h1

className="text-white text-8xl"

style={{

fontFamily:"Great Vibes"

}}

>

Happy Birthday

</h1>

<h2

className="text-pink-300 mt-6 text-5xl"

>

Sharlyn ❤️

</h2>

<p

className="mt-10 text-white max-w-xl text-xl"

>

May today remind you
how incredibly loved
you are.

</p>

<motion.div

animate={{

scale:[1,1.2,1]

}}

transition={{

repeat:Infinity,

duration:1.2

}}

className="mt-12"

>

<FaHeart

size={90}

className="text-pink-500 mx-auto"

/>

</motion.div>

</motion.div>

</section>

)

}