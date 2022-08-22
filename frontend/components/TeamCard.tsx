import React from 'react'
import Image from 'next/image'

interface Props {
  name: string
  position: string
  imageSrc: string
}

export const TeamCard: React.FC<Props> = ({ name, position, imageSrc }) => {
  return (
    <div className="overflow-hidden text-center rounded-lg">
      <Image
        src={imageSrc}
        className="team-card-img"
        height={100}
        width={100}
      />
      <h1 className="font-medium text-lg px-5 pt-3">{name}</h1>
      <h1 className="px-5">{position}</h1>
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
