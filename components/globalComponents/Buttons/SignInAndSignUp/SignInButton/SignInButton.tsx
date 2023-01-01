import React from 'react'

const SignInButton = () => {
  return (
    <button type='button' title='singIn' className='w-20 md:w-32 h-[4.5vh] relative flex justify-center items-center bg-black rounded-sm border-2 border-black'>
        <span className='w-20 md:w-32 h-[4.5vh] absolute bottom-[2px] right-[2px] bg-white  flex justify-center items-center rounded-sm border-2 border-black active:right-0 active:bottom-0 hover:right-0 hover:bottom-0'>
          <p className='text-xs md:text-sm font-medium'> Sign in  </p>
        </span>
    </button>
  )
}

export default SignInButton