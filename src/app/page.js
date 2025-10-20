import Image from "next/image";
import { Button } from "@/components/ui/button"
import { FaGithub, FaInstagram, FaLinkedin, FaChevronDown } from "react-icons/fa6";
import SocialMedia from "@/components/social-media";
import * as motion from "motion/react-client"
import ProjectCard from "@/components/project-card/project-card";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
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
		<div className="flex flex-col md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[55%] w-full h-[100vh] pt-15 p-8 sm:px-20 pb-20 gap-12">
			<div className="flex flex-col gap-5 text-lg">
				<h1 className="text-5xl font-medium mb-5" id="hello">Hello...</h1>
				<p>I'm an Electrical and Electronic Engineering student at Imperial College London, passionate about building things. I have an interest in programming, electronics, computing, and space.</p>
				<p>I've been programming for 6 years and I'm familiar with JavaScript, TypeScript, Python, C++ and C#. The main things I've built recently have been using JS frameworks such as Next.js, React, React Native. I'm exploring new project ideas with new languages and frameworks.</p>
				<p>The last few years I've been involved with a number of engineering-related competitions. In many of these competitions I've taken on leadership roles, leading small teams of 6 to large teams of 70 in engineering and technical contexts.</p>
				<p>I won the International Space Settlement Design Competition as the team's VP of Engineering in 2024, and our team was runner-up in 2025. I've also been a UK Space Design Competition national finalist for three consecutive years, serving as company president and a head of department.</p>
				<p>I've also been named Engineering Student of the Year Runner-Up by the Engineering Education Scheme Wales.</p>
				<p>It's also an honour to be a recipient of the UKESF Semiconductor Talent Award - a scheme which provides mentorship sessions, workshops, and a learning and development bursary.</p>
			</div>
			<div className="flex flex-col gap-5">
				<h1 className="text-3xl font-medium mb-5">Recent Projects</h1>
				<ProjectCard 
					title="BeerBingo - beerbingo.co.uk"
					description="Gamified platform to encourage reduced drinking by making tracking of alcohol consumption fun"
					bullets={[
						"Built a full-stack app with a modern Next.js + Supabase stack",
						"Implemented a custom user authentication system using Supabase Auth",
						"Built a structured drinks database with Supabase, storing images in an S3 bucket",
						"Added real-time ranking system and interactive stats dashboard with graphs and trend analysis",
						"Enabled users to upload new drinks missing from the database",
						"Iterated features based on feedback and optimised load time by 78% through query optimisation"
					]}
					website="https://www.beerbingo.co.uk/"
					github="https://github.com/m-bleasdale/beer-bingo"
					date="August 2025"
					type="Full-stack"
					language="TypeScript"
					link="https://www.beerbingo.co.uk/"
				/>
				<ProjectCard 
					title="No Time For News - ntfn.co.uk"
					description="Student-led news platform delivering concise, impartial coverage of world and political events"
					bullets={[
						"Built a website and content management system using Next.js and Markdown",
						"Reached 1.2k+ unique monthly readers",
						"Worked with a team of journalists to optimise article delivery",
						"Built front-end components for displaying articles, summaries, and citations",
					]}
					website="https://www.ntfn.co.uk/"
					github="https://github.com/m-bleasdale/ntfn"
					date="June - August 2025"
					type="Full-stack"
					language="JavaScript"
					link="https://www.ntfn.co.uk/"
					image="ntfn.png"
				/>
				<ProjectCard 
					title="Visualisation of the Geographic Concentration of Businesses in Cities"
					description="GIS tool mapping business location density in UK cities to identify urban hotspots"
					bullets={[
						"Built a web-based mapping tool using JavaScript and the Leaflet library",
						"Mapped location XML data from the UK Food Standards Agency",
						"Created multiple modes (heatmap and points) for different types of analysis",
						"Enabled filtering by business type for targeted analysis",
					]}
					website="https://business-heatmap.vercel.app/"
					github="https://github.com/m-bleasdale/Business-Heatmap"
					writeUp="/Urban_Analysis_Through_the_Visualisation_of_the_Geographic_Concentration_of_Businesses.pdf"
					date="June 2025"
					type="Project"
					language="JavaScript"
					link="https://business-heatmap.vercel.app/"
					image="businessheatmap.png"
				/>

				<ProjectCard 
					title="AI Assistant"
					description="AI agent to manage calendar events and tasks through natural language input"
					bullets={[
						"Built a full-stack web app using Next.js, Gemini API, Google Calendar API, Google Tasks API, and OAuth",
						"Designed the tool to add, modify, and remove events and tasks based on input",
						"Assistant automatically schedules events around existing commitments",
						"Enabled assistant to provide scheduling advice and alter existing events",
					]}
					website="https://assistant-opal.vercel.app/"
					github="https://github.com/m-bleasdale/assistant"
					date="January 2025"
					type="Full-stack"
					language="JavaScript"
					link="https://github.com/m-bleasdale/assistant"
					image="assistant.png"
				/>

				<ProjectCard 
					title="EESW Sustainable Community - Gold Crest Award"
					description="Conceptual sustainable community designed for 500 residents in South Wales"
					bullets={[
						"Delivered a 73-page technical report and presentation, working with 6 engineers",
						"Designed housing, power systems, water management, and EV infrastructure",
						"Led team as Project Coordinator, managing project progress and overall vision",
						"Awarded Best Use of STEM for Sustainability & Environment by Welsh Government",
					]}
					writeUp="/SustainableCommunityReport.pdf"
					date="2024"
					type="Technical Report"
					link="/SustainableCommunityReport.pdf"
					image="suscom.png"
				/>

				<ProjectCard 
					title="To what extent can the energy efficiency of wind turbines be improved? (EPQ)"
					description="Investigating modern wind turbine designs and methods to improve energy efficiency and performance"
					bullets={[
						"Explored the engineering of modern wind turbines, design variations, and power generation",
						"Analysed the use of energy efficiency metrics, such as power coefficient, capacity factor, and Betz limit",
						"Reviewed how rotor radius, wind speed, and system losses impact achievable efficiency",
						"Evaluated design improvements including aeroelastic blades, dual-rotor systems, and bio-inspired designs",
						"Assessed trade-offs between efficiency, cost, weight, transport, noise, and carbon footprint",
					]}
					writeUp="/MorganBleasdaleEPQ.pdf"
					date="2024"
					type="Research Paper"
					link="/MorganBleasdaleEPQ.pdf"
				/>

				<ProjectCard 
					title="Unity Grid Placement"
					description="Interactive Unity tool for grid-based object placement"
					bullets={[
						"Built object selection, placement, rotation, and variable object sizes",
						"Implemented collision detection to prevent overlapping objects",
						"Designed an extensible framework to allow new placeable objects to be added",
					]}
					github="https://github.com/m-bleasdale/UnityGridPlacementSystem"
					date="2024"
					type="Application"
					language="C#"
					link="https://github.com/m-bleasdale/UnityGridPlacementSystem"
					image="gridplacement.png"
				/>

				<ProjectCard 
					title="HandUI"
					description="An AI-based hand-tracking interface for desktop mouse control"
					bullets={[
						"Developed a hand-tracking system using Google's Mediapipe to translate hand movement into cursor control",
						"Integrated PyAutoGUI to control mouse position in real-time",
						"Created a Tkinter desktop application to visualise hand movement",
					]}
					github="https://github.com/m-bleasdale/UnityGridPlacementSystem"
					date="2023"
					type="Application"
					language="Python"
					link="https://github.com/m-bleasdale/UnityGridPlacementSystem"
				/>

			</div>

			<div className="flex flex-col items-center gap-2 pb-10">
				<div className="flex flex-row gap-4 justify-center items-center pb-4">
					<SocialMedia link="https://www.linkedin.com/in/morgan-bleasdale/" icon={<FaLinkedin color="var(--primary)" size={32}/>} />
					<SocialMedia link="https://www.instagram.com/morgan.bleasdale/" icon={<FaInstagram color="var(--primary)" size={32}/>} />
					<SocialMedia link="https://github.com/m-bleasdale" icon={<FaGithub color="var(--primary)" size={32}/>} />
				</div>
				<p className="text-lg font-medium text-primary text-center">© 2025 Morgan Bleasdale</p>
				<p className="text-sm text-center">This site uses anonymised analytics that doesn't track individual users. <a className="underline" href="https://blog.cloudflare.com/free-privacy-first-analytics-for-a-better-web">Learn more about Cloudflare analytics</a></p>
			</div>



		</div>
    </div>
  );
}
