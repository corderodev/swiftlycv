import { CvExperience } from '@/types/cv'

interface PreviewExperienceProps {
  experience: CvExperience[]
  lang: 'en' | 'es'
}

export const PreviewExperience = ({
  experience,
  lang
}: PreviewExperienceProps) => {
  return (
    <>
      {experience.length !== 0 && (
        <section>
          <h2 className='text-lg font-bold uppercase text-black border-b border-gray-300 pb-1 mb-4'>
            {lang === 'es' ? 'Experiencia laboral' : 'Work experience'}
          </h2>
          {experience.map(
            (
              {
                title,
                company,
                location,
                duration,
                achievements
              }: CvExperience,
              index: number
            ) => (
              <div key={index} className='mb-6'>
                <div className='flex justify-between items-start mb-1'>
                  <div>
                    <h3 className='font-bold text-black'>{title}</h3>
                    <p className='text-sm'>{company}</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm text-black'>{location}</p>
                    <p className='text-sm'>{duration}</p>
                  </div>
                </div>
                <ul className='list-disc ml-4 text-sm space-y-1'>
                  {achievements.split('.').map((achievement, i) => (
                    <li key={i}>{achievement}.</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </section>
      )}
    </>
  )
}
