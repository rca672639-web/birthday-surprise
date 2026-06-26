import { motion } from "framer-motion";

export default function HeroBackground() {

    return (

        <>

            {/* Animated Gradient */}

            <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#FFF8F0]
                via-pink-100
                to-purple-200
                bg-[length:400%_400%]
                animate-[gradient_15s_ease_infinite]
                "
            />

            {/* Brown Blur */}

            <motion.div

                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -50, 50, 0]
                }}

                transition={{
                    repeat: Infinity,
                    duration: 15
                }}

                className="
                absolute
                left-10
                top-20
                h-72
                w-72
                rounded-full
                bg-[#6F4E37]
                opacity-20
                blur-3xl
                "

            />

            {/* Pink Blur */}

            <motion.div

                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 100, -80, 0]
                }}

                transition={{
                    repeat: Infinity,
                    duration: 18
                }}

                className="
                absolute
                right-10
                bottom-20
                h-80
                w-80
                rounded-full
                bg-pink-400
                opacity-30
                blur-3xl
                "

            />

        </>

    )

}