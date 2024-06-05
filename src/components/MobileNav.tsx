'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const MobileNav = () => {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu className="relative z-50 h-5 w-5 text-zinc-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Learn More</DropdownMenuItem>
          <DropdownMenuItem>
            Get Started <ArrowRight className="h-5 w-5 ml-1.5" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileNav
