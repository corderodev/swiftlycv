import { Input } from '@/ui/input'
import { Button } from '@/ui/button'

interface EditSkillsProps {
  lang: 'en' | 'es'
  skills: string[]
  addNewEntry: (section: string) => void
  clearSection: (section: 'experience' | 'education' | 'skills') => void
  handleChangeSkills: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => void
}

export const EditSkills = ({
  lang,
  skills,
  addNewEntry,
  clearSection,
  handleChangeSkills
}: EditSkillsProps) => {
  return (
    <div className='pb-4 border-t pt-4'>
      <h2 className='font-bold mb-1'>
        {lang === 'es' ? 'Habilidades' : 'Skills'}
      </h2>
      {skills.length !== 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <Input
                value={skill}
                onChange={e => handleChangeSkills(e, index)}
                placeholder={
                  lang === 'es'
                    ? 'Habilidad (ej: Javascript, React, Node.js)'
                    : 'Skill (e.g. Javascript, React, Node.js)'
                }
                className='mb-2'
                maxLength={49}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>
          {lang === 'es'
            ? 'Añade habilidades a tu CV'
            : 'Add skills to your CV'}
        </p>
      )}

      <div className='flex flex-wrap gap-4'>
        <Button onClick={() => addNewEntry('skills')} className='mt-4'>
          {lang === 'es' ? 'Añadir habilidad' : 'Add new skill'}
        </Button>
        <Button onClick={() => clearSection('skills')} className='mt-4'>
          {lang === 'es' ? 'Borrar habilidades' : 'Clear skills'}
        </Button>
      </div>
      {!skills && (
        <p>
          {lang === 'es'
            ? 'Añade habilidades a tu CV'
            : 'Add skills to your CV'}
        </p>
      )}
    </div>
  )
}
