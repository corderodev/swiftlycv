import { cn } from '@/lib/utils'
import { Cv } from '@/types/cv'
import { PreviewSkills } from '@/components/cv-edit/preview-section/PreviewSkills'
import { PreviewEducation } from '@/components/cv-edit/preview-section/PreviewEducation'
import { PreviewExperience } from '@/components/cv-edit/preview-section/PreviewExperience'
import { PreviewHeader } from '@/components/cv-edit/preview-section/PreviewHeader'
import { Pencil } from 'lucide-react'

interface PreviewPanelProps {
  isEditorOpen: boolean
  lang: 'en' | 'es'
  name: Cv['name']
  summary: Cv['summary']
  location: Cv['location']
  social: Cv['social']
  experience: Cv['experience']
  education: Cv['education']
  skills: Cv['skills']
}

export const PreviewPanel = ({
  isEditorOpen,
  lang,
  name,
  summary,
  location,
  social,
  experience,
  education,
  skills
}: PreviewPanelProps) => {
  return (
    <div
      className={cn(
        'print-show flex-1 transition-all duration-200',
        isEditorOpen ? 'ml-auto' : 'ml-0'
      )}
    >
      <div
        className={cn(
          'max-w-3xl space-y-8 py-6 px-8 min-h-screen text-gray-600',
          isEditorOpen ? 'ml-auto' : 'mx-auto',
          name && summary && location && social && experience && education && skills
            ? ''
            : 'grid items-center'
        )}
      >
        {name &&
        summary &&
        location &&
        social &&
        experience &&
        education &&
        skills ? (
          <>
            <PreviewHeader
              name={name}
              location={location}
              social={social}
              summary={summary}
            />
            <PreviewExperience lang={lang} experience={experience} />
            <PreviewEducation lang={lang} education={education} />
            <PreviewSkills lang={lang} skills={skills} />
          </>
        ) : (
          <p className='mx-auto text-lg text-center flex flex-wrap gap-2 items-center justify-center'>
            You need first to fill fields in the editor, please click the{' '}
            <span className='p-2 rounded-full border bg-white shadow-sm'>
              <Pencil className='size-5' />
            </span>
          </p>
        )}
      </div>
    </div>
  )
}
