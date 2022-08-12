import React from 'react'; // we need this to make JSX compile

interface Props {
  title: string,
  date: string,
  description: string
}

export const Card: React.FC<Props> = ({ title, date, description}) => {
  return (
    <div>
      <h1>Card</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};