import { motion } from "framer-motion";

export default function PolaroidCard({

    image,

    title

}){

return(

<motion.div

initial={{
opacity:0,
y:100,
rotate:-5
}}

whileInView={{
opacity:1,
y:0,
rotate:0
}}

transition={{
duration:.8
}}

whileHover={{
scale:1.05,
rotate:2
}}

viewport={{
once:true
}}

className="bg-white p-4 rounded-xl shadow-2xl"

>

<img

src={image}

alt={title}

className="rounded-lg h-[420px] w-full object-cover"

/>

<h3

className="mt-4 text-center font-semibold"

>

{title}

</h3>

</motion.div>

)

}