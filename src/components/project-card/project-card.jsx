import { Link, File } from "lucide-react";
import Description from "./description";
import { FaGithub } from "react-icons/fa6";
import Type from "./type";
import Language from "./language";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Bullets from "./bullets";

export default function ProjectCard ({image, title, description, bullets, website, github, date, type, language, writeUp, link}) {
    const grid = image 
        ? "md:grid-cols-[230px_1fr] gap-4 md:grid-rows-1 grid-rows-[200_1fr]"
        : "";

    return (
        <div className={`grid border items-center w-full p-4 rounded-lg ${grid}`}>
            {image &&
                <div className="h-full">
                    <Image height={400} width={400} alt="Project image" src={`/${image}`} className="h-full w-full object-cover rounded-lg"/>
                </div>
            }
            <div className="flex flex-col gap-3">
                <div>
                    <a 
                        href={link} 
                        className="text-lg font-medium border-b border-b border-foreground hover:cursor hover:text-foreground/90 hover:border-foreground/90"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {title}
                    </a>
                </div>
                <div>
                    <p className="font-medium">{description}</p>
                    {bullets && <Bullets bullets={bullets} />}
                </div>
                <div className="flex flex-row flex-wrap gap-5">
                    {website && 
                        <a 
                            href={website} 
                            className="flex flex-row gap-1 items-center text-blue-700 hover:underline hover:cursor-pointer"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Link size={16}/>
                            <p>Website</p>
                        </a>
                    }
                    {github && 
                        <a 
                            href={github} 
                            className="flex flex-row gap-1 items-center text-blue-700 hover:underline hover:cursor-pointer"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >                        
                            <FaGithub size={16}/>
                            <p>Github</p>
                        </a>
                    }
                    {writeUp &&
                        <a 
                            href={writeUp} 
                            className="flex flex-row gap-1 items-center text-blue-700 hover:underline hover:cursor-pointer"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >                        
                            <File size={16}/>
                            <p>Report</p>
                        </a>
                    }

                    <div className="flex flex-row flex-wrap gap-2">
                        <Type value={type} />

                        {date && <Badge variant="outline">{date}</Badge>}

                        {language && <Language value={language} />}
                    </div>

                </div>
            </div>
        </div>
    )
}