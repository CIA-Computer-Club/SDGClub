import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from 'lucide-react';
import Link from '@/components/Link';

export default function MenuButton(){

    return(
      <div className="text-white left-0 top-0">
`      <DropdownMenu>
        <DropdownMenuTrigger><Menu size={80} color="#ffffff" strokeWidth={3} absoluteStrokeWidth /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem><Link href="/about">About Us</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/goals">Our Goals</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/projects">Projects</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/contact">Contact</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="https://github.com/CIA-Computer-Club/SDGClub" target="_blank">Credits</Link></DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
`
      </div>
    )
}