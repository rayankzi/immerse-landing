import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import MobileNav from '@/components/MobileNav'

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Immerse</span>
          </Link>

          <MobileNav />

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/"
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                Learn More
              </Link>

              <Link
                className={buttonVariants({
                  size: 'sm',
                })}
                href="/dashboard"
                target="_blank"
              >
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
