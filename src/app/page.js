import Image from "next/image";
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import SocialMedia from "@/components/social-media";

import * as motion from "motion/react-client"

import AnimLink from "@/components/anim-link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen bg-blue-950 sm:bg-gradient-to-t sm:from-slate-900 sm:to-blue-900">
        <div className="grid grid-rows-[48px_1fr] w-full h-[100vh] p-8 pb-20">
          <div className="flex flex-row gap-4 justify-center items-center">
            <SocialMedia link="https://www.linkedin.com/in/morgan-bleasdale/" icon={<FaLinkedin color="var(--primary-foreground)" size={32}/>} />
            <SocialMedia link="https://www.instagram.com/morgan.bleasdale/" icon={<FaInstagram color="var(--primary-foreground)" size={32}/>} />
            <SocialMedia link="https://github.com/m-bleasdale" icon={<FaGithub color="var(--primary-foreground)" size={32}/>} />

          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col gap-[55px]">
              <div className="flex flex-col gap-[32px]">
                <h1 className="lg:text-8xl text-7xl text-center text-primary-foreground font-light">Morgan Bleasdale</h1>
                <div className="flex flex-col items-center gap-2 text-center">
                  <p className="text-3xl font-light text-primary-foreground/80 font-light">Electrical and Electronic Engineering</p>
                  <p className="text-2xl font-light text-primary-foreground/80 font-light">Imperial College London</p>
                </div>
              </div>
              {/*
              <div className="flex gap-4 items-center flex-row md:justify-start justify-center">
                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="inline-block p-2 cursor-pointer"
                >
                  <a className="text-lg rounded-xl py-2 px-7 bg-[#e9ebf0] hover:cursor-pointer hover:bg-[#dadce0]">Resume</a>
                </motion.div>

                <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="inline-block p-2 cursor-pointer"
                >
                  <a className="text-lg rounded-xl py-2 px-7 border text-[#e9ebf0] hover:cursor-pointer">Projects</a>
                </motion.div>

              </div>
              */}
            </div>
          </div>
        </div>
        </div>
  );
}
