import * as motion from "motion/react-client"

export default function SocialMedia ({icon, link}) {
    return (
        <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block p-2 cursor-pointer"
        >
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            >
                {icon}
            </a>
        </motion.div>
    )
}