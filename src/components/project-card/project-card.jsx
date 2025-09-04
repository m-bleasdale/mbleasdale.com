import { Link, File } from "lucide-react";
import Description from "./description";
import { FaGithub } from "react-icons/fa6";
import Type from "./type";
import Language from "./language";
import { Badge } from "../ui/badge";

export default function ProjectCard ({image, title, description, website, github, date, type, language, writeUp}) {
    return (
        <div className="flex flex-col gap-3 border w-full p-4 rounded-lg">
            <a className="text-lg font-medium">{title}</a>
            <div className="flex flex-row flex-wrap gap-2">
                <Type value={type} />
                {date && <Badge variant="outline">{date}</Badge>}
                {language && <Language value={language} />}
            </div>
            {description && <Description text={description} />}
            <div className="flex flex-row gap-5">
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
            </div>
        </div>
    )
}