import React from 'react'
import Bar from './Bar'

interface BarArrayProps {
  nrOfBars?: number;
};

const BarArray: React.FC<BarArrayProps> = ({ nrOfBars = 20 }) => {
  const bars = Array.from(
    { length: nrOfBars }, () => Math.floor(Math.random() * 100) + 1
  );

  return (
    <div className="flex justify-center items-start">
      {
        bars.map((value) => (
        <Bar key={value} height={value} value={value} />
        ))
      }
    </div>
  );
}

export default BarArray