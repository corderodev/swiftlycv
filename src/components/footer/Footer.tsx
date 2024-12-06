import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full py-6 bg-gray-50'>
      <p className='text-center text-sm leading-loose text-muted-foreground'>
        Built by{' '}
        <Link
          href='https://github.com/corderodev'
          target='_blank'
          rel='noreferrer'
          className='font-medium underline underline-offset-4'
        >
          corderodev
        </Link>
        . The source code is available on{' '}
        <Link
          href='https://github.com/corderodev/quick-cv'
          target='_blank'
          rel='noreferrer'
          className='font-medium underline underline-offset-4'
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  )
}
