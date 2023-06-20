import { Fragment, createElement, useRef, useState } from 'react'
import classNames from 'classnames'

import { technologies } from '~/utils/mocks/technologies'

import { Button } from '../Shared/Button'

export const Technologies = () => {
  const refDescription = useRef<HTMLQuoteElement>(null)
  const initialDescription =
    technologies.find(tech => tech.title === 'default')?.description ?? ''

  const [heading, setHeading] = useState<string | undefined>('')
  const [description, setDescription] = useState<string>(initialDescription)

  return (
    <section className="bg-[#010B40] lg:max-h-[500px] border py-10">
      <div className="w-[90%] md:max-w-[750px] lg:max-w-[1000px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-x-5 lg:gap-20 py-10">
        <div className="w-full text-white text-center lg:text-left flex items-center">
          <blockquote
            className="md:text-lg leading-9"
            dangerouslySetInnerHTML={{ __html: description }}
            ref={refDescription}
          />
        </div>
        <div className="w-full flex items-center">
          <div className="max-w-[500px] flex flex-wrap gap-4 justify-center lg:justify-normal mx-auto items-center">
            {technologies.map(({ title, description, icon }) => {
              const active = title === heading
              return (
                <Fragment key={title}>
                  {title !== 'default' && (
                    <Button
                      type="button"
                      onClick={() => {
                        const newValue = heading === title ? undefined : title
                        setHeading(newValue)
                        !newValue
                          ? setDescription(initialDescription)
                          : setDescription(description)
                      }}
                      className={classNames(
                        'bg-[#127357] text-white py-2 px-3 md:py-3 md:px-4.5 rounded text-sm md:text-md',
                        {
                          'relative overflow-hidden inline-block group':
                            !active,
                          'border-b-4 border-white': active
                        }
                      )}
                    >
                      <div className="flex gap-1.5 items-center">
                        {icon &&
                          createElement(icon, {
                            title
                          })}
                        {title}
                      </div>
                      <div
                        className={classNames({
                          'border-b-4 border-white absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-300 origin-center':
                            !active
                        })}
                      ></div>
                    </Button>
                  )}
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
