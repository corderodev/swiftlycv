import { Button } from '@/ui/button'
import { Printer } from 'lucide-react'

export const PrintButton = () => {
  return (
    <Button
      variant='outline'
      size='icon'
      className='print-hide fixed right-4 md:right-8 lg:right-16 xl:right-24 bottom-16 z-30 rounded-full shadow-lg active:bg-black/10'
      onClick={() => window.print()}
      title='Print or Save'
    >
      <Printer className='size-4' />
    </Button>
  )
}
