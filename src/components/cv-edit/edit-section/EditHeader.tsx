import { Textarea } from '@/ui/textarea'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import { CvSocial } from '@/types/cv'

interface EditHeaderProps {
  lang: 'en' | 'es'
  name: string
  location: string
  social: CvSocial['value']
  summary: string
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => void
}

export const EditHeader = ({
  lang,
  name,
  location,
  social,
  summary,
  handleChange
}: EditHeaderProps) => {
  return (
    <section className='flex flex-col gap-4'>
      <Label className='text-sm'>
        {lang === 'es' ? 'Nombre y apellido' : 'Full name'}
        <Input
          id='name'
          value={name}
          onChange={e => handleChange(e, 'name')}
          placeholder={
            lang === 'es' ? 'ej: Daniel Cordero' : 'e.g. Daniel Cordero'
          }
        />
      </Label>
      <Label className='text-sm'>
        {lang === 'es' ? 'Ubicación' : 'Location'}
        <Input
          id='location'
          value={location}
          onChange={e => handleChange(e, 'location')}
          placeholder={
            lang === 'es'
              ? '¿Dónde vives? (ej: Madrid, España)'
              : 'Where you live? (e.g. Madrid, Spain)'
          }
        />
      </Label>
      <Label className='text-sm'>
        {lang === 'es' ? 'Redes sociales' : 'Social media'}
        <Textarea
          value={social}
          onChange={e => handleChange(e, 'social')}
          placeholder={
            lang === 'es'
              ? 'Añade los enlaces a tus redes sociales separados por comas'
              : 'Add your social links separated by comma'
          }
          className='min-h-fit'
          maxLength={337}
        />
      </Label>
      <Label className='text-sm'>
        {lang === 'es' ? 'Perfil profesional' : 'Professional summary'}
        <Textarea
          value={summary}
          onChange={e => handleChange(e, 'summary')}
          placeholder={
            lang === 'es'
              ? 'Escribe un breve resumen de ti'
              : 'Write a short summary of yourself'
          }
          className='min-h-[120px]'
          maxLength={337}
        />
      </Label>
    </section>
  )
}
