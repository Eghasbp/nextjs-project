import React from 'react'

const Time = ({data}) => {
  return (
    <div>
        <p className='text-base font-sans text-black'>{data.todo}</p>
    </div>
  )
}

export default Time