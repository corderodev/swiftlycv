import { TrashIcon } from 'lucide-react'
import { Button } from '@/ui/button'
import { Card, CardContent } from '@/ui/card'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textarea'
import { CvExperience } from '@/types/cv'

interface EditExperienceProps {
  lang: 'en' | 'es'
  experience: CvExperience[]
  addNewEntry: (section: string) => void
  deleteEntry: (section: 'experience' | 'education', index: number) => void
  clearSection: (section: 'experience' | 'education') => void
  handleSectionChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: 'experience' | 'education',
    index: number,
    field: string
  ) => void
}

export const EditExperience = ({
  lang,
  experience,
  addNewEntry,
  deleteEntry,
  clearSection,
  handleSectionChange
}: EditExperienceProps) => {
  return (
    <div className='pb-4 border-t pt-4'>
      <h2 className='font-bold mb-1'>
        {lang === 'es' ? 'Experiencia laboral' : 'Work experience'}
      </h2>
      {experience.length !== 0 ? (
        experience.map(
          (
            { title, company, location, duration, achievements }: CvExperience,
            index: number
          ) => (
            <Card key={index} className='my-4 border-none shadow-none'>
              <CardContent className='p-0'>
                <Input
                  value={title}
                  onChange={e =>
                    handleSectionChange(e, 'experience', index, 'title')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Cargo (ej: Ingeniero de software)'
                      : 'Job title (e.g. Software Engineer)'
                  }
                  className='mb-2'
                />
                <Input
                  value={company}
                  onChange={e =>
                    handleSectionChange(e, 'experience', index, 'company')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Empresa (ej: Google)'
                      : 'Company (e.g. Google)'
                  }
                  className='mb-2'
                />
                <Input
                  value={location}
                  onChange={e =>
                    handleSectionChange(e, 'experience', index, 'location')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Ubicación (ej: Madrid, España)'
                      : 'Location (e.g. Madrid, Spain)'
                  }
                  className='mb-2'
                />
                <Input
                  value={duration}
                  onChange={e =>
                    handleSectionChange(e, 'experience', index, 'duration')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Duración (ej: Junio, 2022 - Septiembre, 2022)'
                      : 'Duration (e.g. June, 2022 - September, 2022)'
                  }
                  className='mb-2'
                />
                <Textarea
                  value={achievements}
                  onChange={e =>
                    handleSectionChange(e, 'experience', index, 'achievements')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Logros (ej: Diseño de interfaz de usuario, Desarrollo de aplicación móvil)'
                      : 'Achievements separated by a dot (e.g. UI/UX design. Mobile app development)'
                  }
                  className='min-h-[120px]'
                />
                <Button
                  variant={'destructive'}
                  className='mt-2'
                  onClick={() => deleteEntry('experience', index)}
                >
                  <TrashIcon className='h-5 w-5' />
                  {lang === 'es' ? 'Eliminar' : 'Delete'}
                </Button>
              </CardContent>
            </Card>
          )
        )
      ) : (
        <p>
          {lang === 'es'
            ? 'Añade tu experiencia a tu CV'
            : 'Add experience to your CV'}
        </p>
      )}
      <div className='flex flex-wrap gap-4'>
        <Button onClick={() => addNewEntry('experience')} className='mt-4'>
          {lang === 'es' ? 'Añadir experiencia' : 'Add new experience'}
        </Button>
        <Button onClick={() => clearSection('experience')} className='mt-4'>
          {lang === 'es' ? 'Borrar experiencias' : 'Clear experiences'}
        </Button>
      </div>
    </div>
  )
}
