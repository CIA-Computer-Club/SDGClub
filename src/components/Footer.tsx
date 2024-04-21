import Link from '@/components/Link';
import { Button } from '@/components/ui/button';
export default function Footer(){
    return(
        <div className=''>
            <div className='absolute bottom-20 left-40'>
                <p className='text-4xl'>Get in touch</p>
                <p className=''>Email: theanlay.se@ciaschool.edu.kh </p>
            </div>
            <div className='absolute bottom-20 right-40'>
                <Button asChild className='rounded-full border-black border-2' size="lg">  
                    <Link href="mailto:theanlay.se@ciaschool.edu.kh">Email Me</Link>
                </Button>
            </div>
        </div>
    )
}