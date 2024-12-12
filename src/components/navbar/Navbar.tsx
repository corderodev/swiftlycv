import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className='print-hide w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4'>
      <nav className='h-14 w-full max-w-3xl mx-auto flex items-center justify-between'>
        <Link className='w-fit mr-6 font-bold' href='/'>
          Swiftly CV
        </Link>
        <ul className='w-fit flex items-center space-x-6 text-sm font-medium'>
          <Link
            href='/cv-edit'
            className='transition-colors hover:text-foreground/80 text-foreground'
          >
            Editor CV
          </Link>
          <Link
            href='https://github.com/corderodev/cv-fast'
            className='transition-colors hover:text-foreground/80 text-foreground'
          >
            GitHub
          </Link>
        </ul>
      </nav>
    </header>
  )
}
