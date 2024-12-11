import { CvEducation } from '@/types/cv'

interface PreviewEducationProps {
  education: CvEducation[]
  lang: 'en' | 'es'
}

export const PreviewEducation = ({ education, lang }: PreviewEducationProps) => {
  return (
    <>
      {education.length !== 0 && (
        <section>
          <h2 className='text-lg font-bold uppercase text-black border-b border-gray-300 pb-1 mb-4'>
            {lang === 'es' ? 'Educación' : 'Education'}
          </h2>
          {education.map(
            (
              { school, degree, location, year, achievements }: CvEducation,
              index: number
            ) => (
              <div key={index} className='mb-4'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='font-bold text-black'>{school}</h3>
                    <p className='text-sm'>{degree}</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-sm text-black'>{location}</p>
                    <p className='text-sm'>{year}</p>
                  </div>
                </div>
                <ul className='list-disc ml-4 text-sm'>
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
