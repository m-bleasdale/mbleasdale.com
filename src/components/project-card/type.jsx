
import { Badge } from '@/components/ui/badge';

export default function Type ({ value }) {

    if(value === "Research Paper") return <Badge>{value}</Badge>
    if(value === "Project") return <Badge className='bg-[var(--chart-2)] text-white'>{value}</Badge>
    if(value === "Technical Report") return <Badge className='bg-red-800 text-white'>{value}</Badge>
    if(value === "Application") return <Badge className='bg-amber-600 text-white'>{value}</Badge>
    if(value === "Full-stack") return <Badge className='bg-blue-700 text-white'>{value}</Badge>
    if(value === "CMOS Transistors") return <Badge>{value}</Badge>
    else return <Badge>{value}</Badge>

}