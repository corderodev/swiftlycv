import { Fragment } from 'react'

interface PreviewHeaderProps {
  name: string
  location: string
  social: string
  summary: string
}

export const PreviewHeader = ({
  name,
  location,
  social,
  summary
}: PreviewHeaderProps) => {
  return (
    <>
      {name && location && social && summary && (
        <section>
          <div className='text-center space-y-2 border-b border-gray-300 pb-2 mb-4'>
            <h2 className='text-3xl font-bold text-black'>{name}</h2>
            <div className='text-sm gap-1 flex flex-wrap justify-center'>
              <span>{location}</span>
              {social.split(',').map((link, index) => (
                <Fragment key={index}>
                  <span>·</span>
                  <p>{link}</p>
                </Fragment>
              ))}
            </div>
          </div>

          <div>
            <p className='text-sm'>{summary}</p>
          </div>
        </section>
      )}
    </>
  )
}
