import * as motion from "motion/react-client"

export default function AnimLink ({children}) {
  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      whileHover="hover"
      initial="initial"
    >
      <span className="lg:text-xl text-lg font-normal text-[#e9ebf0]">{children}</span>

      <motion.span
        className="absolute left-1/2 bottom-0 h-0.5 bg-[#e9ebf0]"
        variants={{
          initial: { width: 0, x: "-50%" },
          hover: { width: "100%", x: "-50%" },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
    </motion.div>
  )
}