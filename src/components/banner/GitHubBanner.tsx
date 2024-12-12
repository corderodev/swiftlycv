import { Star } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function GitHubBanner () {
  return (
    <Link
      href='https://github.com/corderodev/swiftlycv'
      className='group flex items-center w-fit mx-auto px-4 py-1 rounded-full shadow-sm border border-border bg-white hover:bg-neutral-100 duration-200 transition-colors'
    >
      <span className='me-1 text-base leading-none hover:fill-blue-400 pr-1'>
        <Star className='size-4 stroke-blue-600 fill-blue-400/20' />
      </span>
      Give us a star on GitHub
      <ArrowRight
        className='ml-1'
        size={16}
        strokeWidth={2}
        aria-hidden='true'
      />
    </Link>
  )
}
