import React from 'react' // we need this to make JSX compile
import Image from 'next/image'

interface Props {
  title: string,
  date: string,
  description: string,
  imageSrc: string
}



export const Card: React.FC<Props> = ({ title, date, description, imageSrc }) => {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg text-center">
      <Image src={imageSrc} className="event-card-img" height={800} width={800} />
      <h1 className="font-medium">{title}</h1>
      <h1 className="border-b-4 border-bulldog-red">{date}</h1>
      <p>{description}</p>
      <style jsx>
        {`
          .event-card-img {
            position: relative;
          }
        `}
      </style>
    </div>
  )
}
