import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaChevronDown } from "react-icons/fa6";
import SocialMedia from "@/components/social-media";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import Language from "@/components/project-card/language";
import Type from "@/components/project-card/type";

export async function generateMetadata() {

    return {
            title: 'CMOS Transistor-Level Multiplexer (LTspice)',
            description: 'Designed and simulated a CMOS multiplexer using fundamental logic gates at the transistor level',
            openGraph: {
                title: 'CMOS Transistor-Level Multiplexer (LTspice)',
                description: 'Designed and simulated a CMOS multiplexer using fundamental logic gates at the transistor level',
                type: 'article',
                url: `https://www.mbleasdale.com/articles/cmos-multiplexer`,
                images: ['/mux/muxfull.png'],
                authors: [{ name: 'Morgan Bleasdale', url: 'https://www.mbleasdale.com' }],
            },
            twitter: {
                card: 'summary_large_image',
                title: 'CMOS Transistor-Level Multiplexer (LTspice)',
                description: 'Designed and simulated a CMOS multiplexer using fundamental logic gates at the transistor level',
                images: ['/mux/muxfull.png'],
                authors: ['Morgan Bleasdale'],
            },
            alternates: {
                canonical: `https://www.mbleasdale.com/articles/cmos-multiplexer`
            }
    }
}

export default function Page() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
        <div className="flex flex-col items-center justify-items-center w-full py-4 px-8 sm:px-25 bg-slate-900">
            <div className="grid grid-cols-2 md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] w-full">
                <a className="flex flex-row gap-4 items-center" href="/">
                    <h1 className="text-primary-foreground text-xl sm:text-2xl hover:underline hover:cursor-pointer">Morgan Bleasdale</h1>
                </a>
                <div className="flex flex-row gap-1 sm:gap-4 justify-end items-center">
                    <SocialMedia link="https://www.linkedin.com/in/morgan-bleasdale/" icon={<FaLinkedin color="var(--primary-foreground)" size={28}/>} />
                    <SocialMedia link="https://www.instagram.com/morgan.bleasdale/" icon={<FaInstagram color="var(--primary-foreground)" size={28}/>} />
                    <SocialMedia link="https://github.com/m-bleasdale" icon={<FaGithub color="var(--primary-foreground)" size={28}/>} />
                </div>
            </div>
        </div>
        <div className="flex flex-col md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] w-full h-[100vh] pt-15 p-8 sm:px-20 pb-20 gap-12">
            <div className="flex flex-col gap-5">

                <div>
                    <h1 className="text-3xl sm:text-4xl font-medium mb-5">CMOS Transistor-Level Multiplexer (LTspice)</h1>
                    <h2 className="sm:text-xl text-lg sm:font-medium mb-5">Designed and simulated a CMOS multiplexer using fundamental logic gates at the transistor level</h2>
                    <div className="flex flex-row flex-wrap gap-2">
                            <Type value={"CMOS Transistors"} />
                            <Badge variant="outline">December 2025</Badge>
                            <Language value={"LTSpice"} />
                    </div>
                    
                </div>

                <div className="flex flex-col items-center">
                    <Image src="/mux/muxfull.png" height={400} width={1000} content="contain" alt="Image of full CMOS Multiplexer" className="rounded-xl"/>
                    <p className="mt-2 text-muted-foreground">An image of the CMOS Multiplexer in LTSpice</p>
                </div>

                <div className="flex flex-col gap-5 text-lg mb-10">
                    <h3 className="text-xl font-bold">What is a Multiplexer?</h3>
                    <p>A multiplexer is a fundamental component in digital electronics. <b>Its job is to select which input signal is forwarded to a single output signal, based on a control signal.</b></p>
                    <p>I designed a single-bit 2-input multiplexer. <b>It takes two inputs, A and B, and switches between them based on the value of the select input (S).</b></p>
                    <p>When S is LOW (0), the output should be A. When S is HIGH (1) the output should be B.</p>
                    <p>It is designed using logic gates to create the following boolean expression:</p>
                    <p className="text-2xl text-center italic font-bold tracking-wide font-serif"><span className="overline decoration-2">S</span>A + SB</p>
                    <p>This looks something like this using NOT, AND and OR gates.</p>
                    <div className="flex flex-col items-center my-5">
                        <Image src="/mux/muxDiagram.png" height={400} width={800} content="contain" alt="Multiplexer designed using logic gates" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">Multiplexer design using logic gates</p>
                    </div>

                    <h3 className="text-xl font-bold">Building a Multiplexer with CMOS</h3>
                    <p>I designed my multiplexer using CMOS (Complementary Metal-Oxide-Semiconductor) transistors.</p>
                    <p>Without getting too technical, these transistors can be combined to create each of the logic gates. When the input signals satisfy the logical expression, the output is driven HIGH, otherwise it is driven LOW.</p>
                    <p>Using LTspice, I started by building a simple <b>NOT gate</b> with one pull-up transistor and one pull-down transistor. This is the simplest logic gate.</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/mux/NOTGateCMOS.png" height={400} width={400} content="contain" alt="NOT gate CMOS" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">The NOT gate built in LTSpice</p>
                    </div>

                    <p><b>Simulating this using transient analysis, we can see that the signal is inverted.</b></p>

                    <p>When S is HIGH (5 V), the NMOS transistor turns on and pulls the output down to 0 V. When S is LOW (0 V), the PMOS transistor turns on and pulls the output up to VDD (5 V).</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/mux/notGateSim.png" height={400} width={600} content="contain" alt="NOT gate simulation" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">Transient analysis simulation of a CMOS NOT gate in LTSpice</p>
                    </div>

                    <p><b>Moving on to an AND gate.</b></p>
                    <p>This is built by combining a NAND gate and a NOT gate. A NAND gate works like an AND gate, but with the output inverted.</p>
                    <p>In CMOS, NAND gates are simpler to build than AND gates, so an AND gate is often created by first using a NAND gate and then inverting its output with a NOT gate.</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/mux/ANDGateCMOS.png" height={400} width={600} content="contain" alt="AND gate CMOS" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">The AND gate built in LTSpice</p>
                    </div>

                    <p>Similarly, an <b>OR gate</b> can be built by combining a NOR gate with a NOT gate.</p>
                    <p>A NOR gate behaves like an OR gate but with the output inverted. Adding a NOT gate flips the output back, giving the correct OR behavior.</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/mux/ORGateCMOS.png" height={400} width={600} content="contain" alt="OR gate CMOS" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">The OR gate built in LTSpice</p>
                    </div>

                    <p><b>I brought these 3 fundamental logic gates together to build the multiplexer. This is shown below.</b></p>
                    <p>The top rail (VDD) represents a HIGH signal, set at a constant 5 V. When a gate outputs HIGH, the signal is pulled up to this voltage.</p>
                    <p>The bottom rail (ground) represents a LOW signal, which is grounded (0 V). When a gate outputs LOW, the signal is pulled down to ground.</p>

                    <div className="flex flex-col items-center">
                        <Image src="/mux/muxfull.png" height={400} width={1000} content="contain" alt="Image of full CMOS Multiplexer" className="rounded-xl"/>
                        <p className="mt-2 text-base text-muted-foreground">An image of the CMOS Multiplexer in LTSpice</p>
                    </div>

                    <h3 className="text-xl font-bold">Simulating using LTSpice</h3>
                    <p>I represented each input signal as a DC voltage supply. I tested a few combinations by changing the values of A, B and S from 0V (LOW) to 5V (HIGH).</p>
                    <p><b>I then performed a transient analysis to plot how the input signals, control signal, and output change over time.</b></p>
                    <p>For this example, I set A to constant 5V, B to constant 0V, and used a pulse signal to change the control signal (S) between 0V and 5V.</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/mux/MUXInputSim.png" height={400} width={700} content="contain" alt="Multiplexer inputs" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">Blue (A) and red (B) are constant and green (S) is a pulse signal, switching between 0V and 5V.</p>
                    </div>

                    <p>The change in S isn’t instantaneous because it takes a small amount of time for the voltage to rise or fall. Physically, electronic signals cannot jump instantly from 0 V to 5 V.</p>

                    <p><b>Let’s compare the output with the select signal.</b> When S is LOW, the output should follow A (HIGH), and when S is HIGH, the output should follow B (LOW).</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/mux/MUXOutSim.png" height={400} width={700} content="contain" alt="Multiplexer outputs" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">Output (pink) is HIGH when S (green) is LOW.</p>
                    </div>

                    <p><b>The multiplexer works as expected.</b></p>

                    <h3 className="text-xl font-bold">Reflection</h3>
                    <p>I really enjoyed this project. It was my first time building an electronic circuit with CMOS transistors. This is something we cover later in my course, and I’m excited to explore it in more depth.</p>
                    <p>I learned how basic logic gates can be designed using CMOS transistors and how PMOS and NMOS transistors complement each other to produce high or low signals based on input(s).</p>
                    <p>I also learned how multiplexers work on a transistor-level. This is a really important component for digital architecture.</p>
                    <p>Overall, this project helped me connect the theory of digital logic to real-world transistor-level circuits, and it’s given me the confidence to look at designing more complicated circuits in the future.</p>

                    <p>Thanks for reading!</p>

                </div>

            </div>

            <Footer />

        </div>
    </div>
  );
}
