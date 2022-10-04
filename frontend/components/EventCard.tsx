import React from 'react'
import Image from 'next/image'

interface Props {
  title: string
  date: string
  description: string
  imageSrc: string
}

export const EventCard: React.FC<Props> = ({
  title,
  date,
  description,
  imageSrc,
}) => {
  return (
    <div className="overflow-hidden shadow-xl text-left rounded-lg">
      <Image
        src={imageSrc}
        className="event-card-img"
        height={800}
        width={800}
      />
      <h1 className="font-medium text-lg px-5 pt-3">{title}</h1>
      <p className="px-5 py-3">{description}</p>
      <h1 className="border-t-2 mx-5 py-3 text-gray-500">{date}</h1>
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
