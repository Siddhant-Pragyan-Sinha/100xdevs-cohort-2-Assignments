import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col border-gray-400 border-2 w-[600px] max-w-[80%] mx-auto bg-gray-50 rounded-md shadow-lg py-10 px-6 m-4 text-gray-600'>
        <div className="profile">
          <h2 className='text-xl font-bold mb-4'>Lokeshwar</h2>
          <p className='mb-4'>A TA in the 100xDevs Cohort 2.0</p>
        </div>
        <div className="interests">
          <h2 className='font-bold mb-2'>Interests</h2>
          <div>
            <p>Iconic</p>
            <p>Open Source</p>
            <p>App Dev</p>
          </div>
        </div>
        <div className="social-app mt-2 flex gap-4">
           <button className='text-white bg-blue-500 py-1 px-4 rounded-md'>LinkdIn</button>
           <button className='text-white bg-blue-500 py-1 px-4 rounded-md'>LinkdIn</button>
           
        </div>
    </div>
  )
}

export default Card