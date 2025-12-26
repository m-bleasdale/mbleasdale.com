import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import SocialMedia from "./social-media";

export default function Footer () {
    return (
        <div className="flex flex-col items-center gap-2 pb-10">
            <div className="flex flex-row gap-4 justify-center items-center pb-4">
                <SocialMedia link="https://www.linkedin.com/in/morgan-bleasdale/" icon={<FaLinkedin color="var(--primary)" size={32}/>} />
                <SocialMedia link="https://www.instagram.com/morgan.bleasdale/" icon={<FaInstagram color="var(--primary)" size={32}/>} />
                <SocialMedia link="https://github.com/m-bleasdale" icon={<FaGithub color="var(--primary)" size={32}/>} />
            </div>
            <p className="text-lg font-medium text-primary text-center">© 2025 Morgan Bleasdale</p>
            <p className="text-sm text-center">This site uses anonymised analytics that doesn't track individual users. <a className="underline" href="https://blog.cloudflare.com/free-privacy-first-analytics-for-a-better-web">Learn more about Cloudflare analytics</a></p>
        </div>
    )
}