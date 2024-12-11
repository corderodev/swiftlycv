import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { Cv } from '@/types/cv'
import { cn } from '@/lib/utils'

import { EditHeader } from '@/components/cv-edit/edit-section/EditHeader'
import { EditExperience } from '@/components/cv-edit/edit-section/EditExperience'
import { EditEducation } from '@/components/cv-edit/edit-section/EditEducation'
import { EditSkills } from '@/components/cv-edit/edit-section/EditSkills'

interface SideBarEditorProps {
  cv: Cv
  lang: 'en' | 'es'
  isEditorOpen: boolean
  setLang: (lang: 'en' | 'es') => void
  addNewEntry: (section: string) => void
  deleteEntry: (section: 'experience' | 'education', index: number) => void
  clearSection: (section: 'experience' | 'education' | 'skills') => void
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => void
  handleSectionChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: 'experience' | 'education',
    index: number,
    field: string
  ) => void
  handleChangeSkills: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    index: number
  ) => void
}

export const SideBarEditor = ({
  cv,
  lang,
  isEditorOpen,
  setLang,
  addNewEntry,
  deleteEntry,
  clearSection,
  handleChange,
  handleSectionChange,
  handleChangeSkills
}: SideBarEditorProps) => {
  const { name, location, social, summary, experience, education, skills } = cv

  return (
    <div
      className={cn(
        'print-hide fixed inset-y-0 left-0 z-20 w-full max-w-[700px] transform overflow-auto bg-white p-6 shadow-lg transition-transform duration-200',
        isEditorOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <h1 className='text-2xl font-bold mb-4'>
        {lang === 'es' ? 'Edita tu CV' : 'Edit Your CV'}
      </h1>
      <Select onValueChange={setLang}>
        <SelectTrigger className='w-[180px] mb-4'>
          <SelectValue placeholder={lang === 'es' ? 'Español' : 'English'}>
            {lang === 'es' ? 'Español' : 'English'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {lang === 'es' ? (
            <SelectItem
              value='en'
              className='w-[180px] px-1 hover:bg-black/5 cursor-pointer'
            >
              English
            </SelectItem>
          ) : (
            <SelectItem
              value='es'
              className='w-[180px] px-1 hover:bg-black/5 cursor-pointer'
            >
              Español
            </SelectItem>
          )}
        </SelectContent>
      </Select>

      <div className='space-y-8'>
        <EditHeader
          lang={lang}
          name={name}
          location={location}
          social={social}
          summary={summary}
          handleChange={handleChange}
        />
        <EditExperience
          lang={lang}
          experience={experience}
          addNewEntry={addNewEntry}
          deleteEntry={deleteEntry}
          clearSection={clearSection}
          handleSectionChange={handleSectionChange}
        />
        <EditEducation
          lang={lang}
          education={education}
          addNewEntry={addNewEntry}
          deleteEntry={deleteEntry}
          clearSection={clearSection}
          handleSectionChange={handleSectionChange}
        />
        <EditSkills
          lang={lang}
          skills={skills}
          addNewEntry={addNewEntry}
          clearSection={clearSection}
          handleChangeSkills={handleChangeSkills}
        />
      </div>
    </div>
  )
}
