import React from 'react'


const Input = ({icon:Icon,...props}) => {
  return (
    <div className='relative mb-6 '>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  ' >
                <Icon className="w-5 h-5 text-black"/>    
            </div>
            <input 
              {...props}
            className='w-full pl-10 pr-3 rounded-lg focus:border-purple-900 text-black focus:ring-2 transition-duration-200 focus:outline-none '
            />
    </div>
  )
}

export default Input 