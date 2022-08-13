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
    <div className="max-w-sm shadow-lg text-center">
      <Image src={imageSrc} height={300} width={300} />
      <h1 className="font-medium">{title}</h1>
      <h1 className="border-b-4 border-bulldog-red">{date}</h1>
      <p>{description}</p>
    </div>
  )
}
