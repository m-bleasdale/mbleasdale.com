
import { Badge } from '@/components/ui/badge';

export default function Type ({ value }) {

    if(value === "Research Paper") return <Badge>{value}</Badge>
    if(value === "Project") return <Badge className='bg-[var(--chart-2)] text-white'>{value}</Badge>
    if(value === "Technical Report") return <Badge className='bg-red-800 text-white'>{value}</Badge>
    if(value === "Application") return <Badge className='bg-amber-600 text-white'>{value}</Badge>

}