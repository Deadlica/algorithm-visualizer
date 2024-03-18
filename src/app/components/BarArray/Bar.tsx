import React from 'react'

const Bar = ({ width = 3, height = 10, value = 0 }) => {
  height = height / 3 + 3
  const barDimensions = {
    width: `${width}rem`,
    height: `${height}rem`,
  };

  return (
    <div className="bg-sky-400 border border-black text-center pt-3 hover:bg-sky-blue-600" style={barDimensions}>
        {value}
    </div>
  )
}

export default Bar