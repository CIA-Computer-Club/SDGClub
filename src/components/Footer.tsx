import Link from '@/components/Link';
import { Button } from '@/components/ui/button';

export default function Footer(){
    return(
        <div className='relative w-screen h-screen text-black'>
            <div className='absolute bottom-12 left-32 h-16 w-42'>
                <p className='text-4xl sm:text-1xl'>Get in touch</p>
                <p className=''>Email: theanlay.se@ciaschool.edu.kh </p>
            </div>
            <div className='absolute bottom-12 right-32 h-16 w-16'>
                <Button asChild className='rounded-full border-black border-2' size="lg">  
                    <Link href="mailto:theanlay.se@ciaschool.edu.kh">Email Me</Link>
                </Button>
            </div>
        </div>
        
    )
}