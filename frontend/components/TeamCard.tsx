import React from 'react'
import Image from 'next/image'

interface Props {
  name: string
  position: string
  imageSrc: string
}

export const TeamCard: React.FC<Props> = ({ name, position, imageSrc }) => {
  return (
    <div className="text-center mb-10">
      <div className="mx-24 lg:mx-12 md:mx-12">
        <Image
          src={imageSrc}
          height={600}
          width={600}
          className="rounded-full"
        />
      </div>
      <h1 className="font-medium text-lg px-5">{name}</h1>
      <h1 className="text-lg px-5">{position}</h1>

      <style jsx>
        {`
          .team-card-img {
            position: relative;
          }
        `}
      </style>
    </div>
  )
}
