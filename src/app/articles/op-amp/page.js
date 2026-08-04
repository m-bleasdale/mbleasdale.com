import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaChevronDown } from "react-icons/fa6";
import SocialMedia from "@/components/social-media";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import Language from "@/components/project-card/language";
import Type from "@/components/project-card/type";

export async function generateMetadata() {

    return {
            title: 'Discrete BJT Operational Amplifier (LTSpice)',
            description: 'Designed an operational amplifier from individual BJTs, following a differential-gain-power stage architecture',
            openGraph: {
                title: 'Discrete BJT Operational Amplifier (LTSpice)',
                description: 'Designed an operational amplifier from individual BJTs, following a differential-gain-power stage architecture',
                type: 'article',
                url: `https://www.mbleasdale.com/articles/op-amp`,
                authors: [{ name: 'Morgan Bleasdale', url: 'https://www.mbleasdale.com' }],
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Discrete BJT Operational Amplifier (LTSpice)',
                description: 'Designed an operational amplifier from individual BJTs, following a differential-gain-power stage architecture',
                authors: ['Morgan Bleasdale'],
            },
            alternates: {
                canonical: `https://www.mbleasdale.com/articles/op-amp`
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
                    <h1 className="text-3xl sm:text-4xl font-medium mb-5">Discrete BJT Operational Amplifier (LTSpice)</h1>
                    <h2 className="sm:text-xl text-lg sm:font-medium mb-5">Designed an operational amplifier from individual BJTs, following a differential-gain-power stage architecture</h2>
                    <div className="flex flex-row flex-wrap gap-2">
                            <Type value={"CMOS Transistors"} />
                            <Badge variant="outline">March 2026</Badge>
                            <Language value={"LTSpice"} />
                    </div>
                    
                </div>

                <div className="flex flex-col gap-5 text-lg mb-10">

                    <p>An Operational Amplifier (also Opamp or Op-amp) is an electronic component that amplifies a <b>differential signal</b>. 
                    This means it amplifes the difference between its 2 inputs, the inverting input and non-inverting input.</p>

                    <p>They are widely used in analogue systems for a variety of applications. These include amplfiers, comparators, filters, integrators, etc. 
                        Typically, they are <i>integrated</i> circuits printed on a single silicon chip. 
                        However, for this project I built a <i>discrete</i> version, meaning it is made of indivdual transistors wired together.</p>

                    <p>The goal of an opamp is to have <b>very high differential gain</b> and <b>very low common-mode gain</b>. 
                    Here <i>common-mode</i> refers to the mean voltage of the two inputs. Not amplifying this allows opamps to be less susceptible to environmental noise, eg the hum from the mains.
                    The ratio of these two gains is called the <b>Common-Mode Rejection Ratio (CMRR)</b>, the higher the better.
                    </p>

                    <p>The opamp I made has 3 stages:</p>

                    <p><b>Differential stage</b> - takes 2 inputs, amplifies the difference into a single output</p>
                    <p><b>Common emitter amplifier stage</b> - provides voltage gain to amplify signal</p>
                    <p><b>Power amplfier (output) stage</b> - increases output current to drive load at low impedance</p>

                    <p>See below my complete opamp.</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/op-amp/complete.png" height={400} width={600} content="contain" alt="Complete opamp" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">LTSpice of complete operation amplifier made with BJTs</p>
                    </div>

                    <p>While testing my opamp I identifed high-frequency instability.</p>
                    
                    <p>Firstly, when the opamp is turned on, within the first few microseconds, the output oscillates at very high frequency.
                     This is because initially, when the Opamp is turned on, the internal biasing and transistors have not yet settled.
                     Once the transistors reach their operating points, the opamp will stabilise. Still, this is not ideal.
                    </p>

                    <p>Secondly, when a high frequency input signal is used, the gain drops off due to capacitance of BJTs acting as a low-pass filter.
                     Again, not ideal. See below.
                    </p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/op-amp/plot.png" height={400} width={600} content="contain" alt="Gain/phase plot" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">LTSpice AC analysis simulation showing high frequency gain roll-off and instable phase.</p>
                    </div>

                    <p>Looking at the phase, we can see that the opamp phase is unstable.
                         The phase lag increases with frequency. When it reaches around-180, the negative feedback becomes positive, 
                         causing instability.</p>

                        <p>This means it has a <b>negative phase margin</b>. Any circuit with negative phase margin is unstable.</p>

                    <p>To overcome all high-frequency stability issues, I added a compensation capacitor to bypass the common emitter stage at high frequencies. 
                        <b> This reduces high frequency gain.</b>
                    </p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/op-amp/cap.png" height={400} width={600} content="contain" alt="Compensation cap" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">Compensation capacitor, bypassing common emitter stage at high frequencies.</p>
                    </div>

                    <p>With the compensation capacitor, the circuit's phase margin is now +16. This means it is stable.</p>

                    <p>I simulated the circuit with an input signal of noise. It amplified it correctly (according to a non-inverting amplifier configuration).</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/op-amp/out.png" height={400} width={600} content="contain" alt="Opamp output with noisy input" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">Opamp output (green) from a simulated noise input (blue).</p>
                    </div>

                    <p>There is no high frequency oscillation being amplified in the output when the Opamp turns on. 
                     This is because the high frequency signal is only a 1mV in amplitude, and since it is not being amplified by the CE Amplifier (because it is bypassed) then it is not recorded in the output.
                    </p>

                    {/*

                    <h3 className="text-xl font-bold">Differential Amplifier Stage</h3>

                    <p>My differential stage was designed as a long-tailed pair. This configuration has high differential mode gain and low common mode gain.</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/op-amp/LTP.png" height={400} width={600} content="contain" alt="Long tailed pair" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">LTSpice long-tailed pair</p>
                    </div>

                    <p>When both inputs are the same, the collector current (Ic) through T1 and T2 is the same.</p>

                    <p>However, a slight difference in the inputs causes a large imbalance in both collector currents. This changes the value of Vout.</p>

                    <div className="flex flex-col items-center my-5">
                        <Image src="/op-amp/LTP_graph.png" height={400} width={600} content="contain" alt="Long tailed pair current graph" className="rounded-xl"/>
                        <p className="mt-3 text-base text-muted-foreground">VD (x-axis) is the differential voltage - the output voltage. When inputs are the same, VD=0.</p>
                    </div>

                    <p>In this graph, VD is the output voltage. When the inputs are the same, the output voltage is 0 V. 
                        As the collector current of one input increases, the other decreases. <b>Total collector current remains constant. </b>
                        If input currents are not equal, the magnitude of VD increases.
                        </p>

                        */}

                </div>

            </div>

            <Footer />

        </div>
    </div>
  );
}
