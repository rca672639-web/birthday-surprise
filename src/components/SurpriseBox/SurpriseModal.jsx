import { motion, AnimatePresence } from "framer-motion";

import SurpriseBox from "./SurpriseBox";

export default function SurpriseModal({
  open,
  onGiftOpen,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-md
          "
        >
          <SurpriseBox onOpen={onGiftOpen} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}