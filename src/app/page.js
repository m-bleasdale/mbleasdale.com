import Image from "next/image";
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin, FaChevronDown } from "react-icons/fa6";
import SocialMedia from "@/components/social-media";
import * as motion from "motion/react-client"
import ProjectCard from "@/components/project-card/project-card";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen ">
		<div className="grid grid-rows-[48px_1fr_48px] w-full h-[100vh] p-8 bg-slate-900">
			<div className="flex flex-row gap-4 justify-center items-center">
			<SocialMedia link="https://www.linkedin.com/in/morgan-bleasdale/" icon={<FaLinkedin color="var(--primary-foreground)" size={32}/>} />
			<SocialMedia link="https://www.instagram.com/morgan.bleasdale/" icon={<FaInstagram color="var(--primary-foreground)" size={32}/>} />
			<SocialMedia link="https://github.com/m-bleasdale" icon={<FaGithub color="var(--primary-foreground)" size={32}/>} />

			</div>
			<div className="flex flex-col justify-center items-center w-full">
			<div className="grid lg:items-center grid-rows-2 flex-wrap lg:grid-cols-2 lg:grid-rows-1 mt-4 lg:mt-0">
				<div className="p-4">
				<Image src="/mbheadshot2.png" height={400} width={400} alt="Photo of Morgan Bleasdale" className="rounded-full"/>
				</div>
				<div className="flex flex-col gap-8 mt-8 lg:mt-0">
				<h1 className="lg:text-7xl text-6xl text-center text-primary-foreground font-light">Morgan Bleasdale</h1>
				<div className="flex flex-col items-center gap-2 text-center">
					<p className="lg:text-2xl text-xl font-light text-primary-foreground/80 font-light">Imperial College London</p>
					<p className="lg:text-xl text-lg font-light text-primary-foreground/80 font-light">Electrical and Electronic Engineering</p>
				</div>
				</div>
			</div>
			</div>
			<div className="flex justify-center text-primary-foreground/80 w-full">
			<motion.a
			whileHover={{ scale: 1.2 }}
			transition={{ type: "spring", stiffness: 300 }}
			className="inline-block p-2 cursor-pointer"
			href="/#hello"
			>
				<FaChevronDown size={18} />
			</motion.a>
			</div>
		</div>
		<div className="flex flex-col lg:w-[55%] w-full h-[100vh] pt-15 p-8 sm:px-20 pb-20 gap-12">
			<div className="flex flex-col gap-5 text-lg">
				<h1 className="text-5xl font-medium mb-5" id="hello">Hello...</h1>
				<p>I'm an incoming Electrical and Electronic Engineering student at Imperial College London, passionate about building things. I have an interest in programming, electronics, computing, and space.</p>
				<p>I've been programming for 6 years and I'm familiar with JavaScript, TypeScript, Python, C++ and C#. The main things I've built recently have been using JS frameworks such as Next.js, React, React Native. I'm exploring new project ideas with new languages and frameworks.</p>
				<p>The last few years I've been involved with a number of engineering-related competitions. In many of these competitions I've taken on leadership roles, leading small teams of 6 to large teams of 70 in engineering and technical contexts.</p>
				<p>I've also been named Engineering Student of the Year Runner-Up by the Engineering Education Scheme Wales.</p>
				<p>It's also an honour to be a recipient of the UKESF Semiconductor Talent Award - a scheme which provides mentorship sessions, workshops, and a learning and development bursary.</p>
			</div>
			<div className="flex flex-col gap-5">
				<h1 className="text-3xl font-medium mb-5">Recent Projects</h1>
				<ProjectCard 
					title="BeerBingo - beerbingo.co.uk"
					description="Beer Bingo is a gamified tool to encourage users to track their alcohol consumption, with the objective of reducing alcohol intake. This is inspired by calorie counting apps, which are used to help reduce food intake and lose weight. It contains a database of common drinks found in UK pubs and establishments. Users must press 'Add Drink' everytime they consume a particular beverage. Over time, they can view rankings and statistics about their drinking habits."
					website="https://www.beerbingo.co.uk/"
					github="https://github.com/m-bleasdale/beer-bingo"
					date="August 2025"
					type="Application"
					language="TypeScript"
				/>
				<ProjectCard 
					title="No Time For News - ntfn.co.uk"
					description="No Time For News serves to produce impartial, no-nonsense news that provides readers with only the most important stories, and explorations of general trends within politics or world news. Working with a team of aspiring journalists, I was responsible for building the main website for the organisation, that was used to display articles to the public."
					website="https://www.ntfn.co.uk/"
					github="https://github.com/m-bleasdale/ntfn"
					date="June - August 2025"
					type="Application"
					language="JavaScript"
				/>
				<ProjectCard 
					title="Urban Analysis Through the Visualisation of the Geographic Concentration of Businesses"
					description="This project maps the density of business locations in UK cities, using data from the Food Standards Agency to identify the general locations of urban city-centres, cultural hubs and commercial and entertainment districts. By visualising high density locations, this tool allows users to easily identify urban hotspots for the determination of potential areas for development or for tourists to decide on which areas are worth spending the most time in."
					website="https://business-heatmap.vercel.app/"
					github="https://github.com/m-bleasdale/Business-Heatmap"
					writeUp="/Urban_Analysis_Through_the_Visualisation_of_the_Geographic_Concentration_of_Businesses.pdf"
					date="June 2025"
					type="Project"
					language="JavaScript"
				/>

				<ProjectCard 
					title="AI Assistant"
					description="This tool is designed to take a simple free text input and update a user's events and tasks. Most people's calendars are full of events, and they have long to-do lists. When something comes up, moving events around in your calendar, or planning time to dedicate to a task, can be a hassle. I designed this tool to reduce the stress that comes with trying to make a busy timetable work. Built with Next.js, Gemini API, Google Calender API, Google Tasks API and OAuth. Google Calendar and Tasks APIs are used to keep track of all events and tasks; as well as edit and modify events and tasks."
					website="https://assistant-opal.vercel.app/"
					github="https://github.com/m-bleasdale/assistant"
					date="January 2025"
					type="Application"
					language="JavaScript"
				/>

				<ProjectCard 
					title="EESW Sustainable Community - Gold Crest Award"
					description="My team of 6 and I were tasked with designing a conceptual sustainable community in South Wales as apart of the Engineering Education Scheme Wales organised by STEM Cymru. We considered various areas that could be improved upon in the design of new communities and created a technical report and 15 minute presentation to report our findings. We were awarded 'Best Use of STEM for Sustainability'"
					writeUp="/SustainableCommunityReport.pdf"
					date="2024"
					type="Technical Report"
				/>

				<ProjectCard 
					title="EPQ - To what extent can the energy efficiency of wind turbines be improved?"
					description="For my EPQ I covered the topic of wind turbine energy efficiency, exploring the design of modern wind turbines and metrics used to quantify energy efficiency. I then analysed proposed designs of improving energy efficiency."
					writeUp="/MorganBleasdaleEPQ.pdf"
					date="2024"
					type="Research Paper"
				/>

				<ProjectCard 
					title="Unity Grid Placement"
					description="A grid based placement system complete with placement and rotation of variously sized object. Built in Unity. See GitHub for examples."
					github="https://github.com/m-bleasdale/UnityGridPlacementSystem"
					date="2024"
					type="Application"
					language="C#"
				/>

				<ProjectCard 
					title="HandUI - Using AI and Hand Movement as an Alternative to a Mouse"
					description="This project aimed to create a proof of concept that your hand can be used to interact with a desktop computer in place of a traditional mouse. It's built on Google's ML Mediapipe framework and uses the PyAutoGUI library to control mouse movement."
					github="https://github.com/m-bleasdale/UnityGridPlacementSystem"
					date="2023"
					type="Application"
					language="Python"
				/>



			</div>

		</div>
    </div>
  );
}
