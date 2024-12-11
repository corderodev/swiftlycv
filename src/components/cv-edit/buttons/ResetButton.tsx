import { ListRestart } from 'lucide-react'
import { Button } from '@/ui/button'
import { Cv } from '@/types/cv'

interface ResetButtonProps {
  setCv: (cv: Cv) => void
}

export const ResetButton = ({ setCv }: ResetButtonProps) => {
  return (
    <Button
      variant='outline'
      size='icon'
      className='print-hide fixed right-4 md:right-8 lg:right-16 xl:right-24 bottom-28 z-30 rounded-full shadow-lg active:bg-black/10'
      title='Reset CV'
      onClick={() =>
        setCv({
          name: '',
          location: '',
          social: '',
          summary: '',
          experience: [],
          education: [],
          skills: []
        })
      }
    >
      <ListRestart />
    </Button>
  )
}
