import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from '@/components/Link';

export default function MenuButton(){
    return(
      <DropdownMenu>
        <DropdownMenuTrigger><HamburgerMenuIcon /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem><Link href="/about">About Us</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/goals">Our Goals</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/projects">Projects</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href="/contact">Contact</Link></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}