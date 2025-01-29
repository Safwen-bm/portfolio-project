import { motion } from "framer-motion";

//variants
const Stairs = ({ steps = 6 }) => {
    const stairAnimation = {
        initial: { top: "0%" },
        animate: { top: "100%" },
        exit: { top: "0%" },
    };

    return (
        <>
            {Array.from({ length: steps }).map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: (steps - index - 1) * 0.1,
                    }}
                    className="w-full h-full bg-white relative"
                />
            ))}
        </>
    );
};

export default Stairs;