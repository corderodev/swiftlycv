import { Pencil, PencilOff } from 'lucide-react'
import { Button } from '@/ui/button'

interface ToggleButtonProps {
  isEditorOpen: boolean
  setIsEditorOpen: (isEditorOpen: boolean) => void
}

export const ToggleButton = ({
  isEditorOpen,
  setIsEditorOpen
}: ToggleButtonProps) => {
  return (
    <Button
      variant='outline'
      size='icon'
      className='print-hide fixed right-4 md:right-8 lg:right-16 xl:right-24 bottom-4 z-30 rounded-full shadow-lg active:bg-black/10'
      title='Open CV Editor'
      onClick={() => setIsEditorOpen(!isEditorOpen)}
    >
      {isEditorOpen ? (
        <PencilOff className='size-4' />
      ) : (
        <Pencil className='size-4' />
      )}
    </Button>
  )
}
