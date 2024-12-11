import { TrashIcon } from 'lucide-react'
import { Button } from '@/ui/button'
import { Card, CardContent } from '@/ui/card'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textarea'
import { CvEducation } from '@/types/cv'

interface EditEducationProps {
  lang: 'en' | 'es'
  education: CvEducation[]
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

export const EditEducation = ({
  lang,
  education,
  addNewEntry,
  deleteEntry,
  clearSection,
  handleSectionChange
}: EditEducationProps) => {
  return (
    <div className='pb-4 border-t pt-4'>
      <h2 className='font-bold mb-1'>
        {lang === 'es' ? 'Educación' : 'Education'}
      </h2>
      {education.length !== 0 ? (
        education.map(
          (
            { school, degree, location, year, achievements }: CvEducation,
            index: number
          ) => (
            <Card key={index} className='my-4 border-none shadow-none'>
              <CardContent className='p-0'>
                <Input
                  value={degree}
                  onChange={e =>
                    handleSectionChange(e, 'education', index, 'degree')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Título de tu grado (ej: Ingeniero de software)'
                      : 'Name of your degree (e.g. Software Engineer)'
                  }
                  className='mb-2'
                />
                <Input
                  value={school}
                  onChange={e =>
                    handleSectionChange(e, 'education', index, 'school')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Institución de graduación (ej: Universidad de Madrid)'
                      : 'Institution of graduation (e.g. University of Madrid)'
                  }
                  className='mb-2'
                />
                <Input
                  value={location}
                  onChange={e =>
                    handleSectionChange(e, 'education', index, 'location')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Ubicación de la institución (ej: Madrid, España)'
                      : 'Location of the institution (e.g. Madrid, Spain)'
                  }
                  className='mb-2'
                />
                <Input
                  value={year}
                  onChange={e =>
                    handleSectionChange(e, 'education', index, 'year')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Año de graduación (ej: 2020 - 2024)'
                      : 'Year of graduation (e.g. 2020 - 2024)'
                  }
                  className='mb-2'
                />
                <Textarea
                  value={achievements}
                  onChange={e =>
                    handleSectionChange(e, 'education', index, 'achievements')
                  }
                  placeholder={
                    lang === 'es'
                      ? 'Logros separados por punto final (ej: Mejora de UX/UI. Mejora en el branding)'
                      : 'Achievements separated by a dot (e.g. UI/UX design. Branding improvement)'
                  }
                  className='min-h-[120px]'
                />
                <Button
                  variant={'destructive'}
                  className='mt-2'
                  onClick={() => deleteEntry('education', index)}
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
            ? 'Añade tus estudios a tu CV'
            : 'Add your education to your CV'}
        </p>
      )}
      <div className='flex flex-wrap gap-4'>
        <Button onClick={() => addNewEntry('education')} className='mt-4'>
          {lang === 'es' ? 'Añadir educación' : 'Add new education'}
        </Button>
        <Button onClick={() => clearSection('education')} className='mt-4'>
          {lang === 'es' ? 'Borrar educación' : 'Clear education'}
        </Button>
      </div>
    </div>
  )
}
