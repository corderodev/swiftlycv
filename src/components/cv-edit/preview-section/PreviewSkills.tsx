interface PreviewSkillsProps {
  skills: string[]
  lang: 'en' | 'es'
}

export const PreviewSkills = ({ skills, lang }: PreviewSkillsProps) => {
  return (
    <>
      {skills.length !== 0 && (
        <section>
          <h2 className='text-lg font-bold uppercase text-black border-b border-gray-300 pb-1 mb-4'>
            {lang === 'es' ? 'Conocimientos' : 'Skills'}
          </h2>
          <ul className='list-disc ml-4 text-sm space-y-1 grid grid-cols-2 items-center gap-x-1 gap-y-0.5'>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
