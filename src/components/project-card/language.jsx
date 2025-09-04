
import { Badge } from '@/components/ui/badge';

export default function Language ({ value }) {

    if(value === "JavaScript") return <Badge className='bg-[#f1e05a] text-foreground'>{value}</Badge>
    if(value === "Python") return <Badge className='bg-[#3572A5]'>{value}</Badge>
    if(value === "TypeScript") return <Badge className='bg-[#3178c6]'>{value}</Badge>
    if(value === "C#") return <Badge className='bg-[#178600]'>{value}</Badge>
    if(value === "C++") return <Badge className='bg-[#f34b7d]'>{value}</Badge>


}