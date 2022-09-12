import React from 'react'
import Image from 'next/image'

interface Props {
  name: string
  position: string
  imageSrc: string
}

export const TeamCard: React.FC<Props> = ({ name, position, imageSrc }) => {
  return (
    <div className="text-left rounded-lg bg-glory-glory">
      <div className="mx-12 rounded-full overflow-hidden bg-green-500">
        <Image
          src={imageSrc}
          className="team-card-img"
          height={600}
          width={600}
        />
      </div>

      <h1 className="font-medium text-lg px-5 pt-3">{name}</h1>

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
