import { motion } from "framer-motion";

export default function FloatingGlow() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: [0.2, 0.6, 0.2] }}
			transition={{ duration: 6, repeat: Infinity }}
			className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl"
		/>
	);
}

