import Link from 'next/link'
import { Footer } from '@/components/footer/Footer'
import { buttonVariants } from '@/components/ui/button'
import GitHubBanner from '@/components/banner/GitHubBanner'

export default function Home () {
  return (
    <>
      <main className='w-full px-4 md:px-6 min-h-[80vh] grid place-content-center'>
        <section className='flex flex-col items-center space-y-4 text-center w-full max-w-4xl mx-auto'>
          <div className='space-y-10'>
            <GitHubBanner />
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
              Make your <span className='text-blue-600'>Resume</span> beautiful,
              easy and fast{' '}
              <span className='text-blue-600'>in a few minutes</span>
            </h1>
            <p className='mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400'>
              <strong>Swiftly CV</strong> is a free and open source tool to create
              your CV more easily and quickly than ever before. Simplify your
              job search and stand out today!
            </p>
          </div>
          <div className='space-x-4'>
            <Link
              href='/cv-edit'
              className={buttonVariants({ variant: 'default', size: 'lg' })}
            >
              Create your CV
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
