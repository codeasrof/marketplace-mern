
import React from 'react'
const SignUp = () => {
  return (
    <section className='flex items-center justify-center flex-col'>
      <div className='flex text-center py-6 flex-col w-[100vw]'>

        <div>
          <h1 className='text-emerald-500 font-medium text-xl mb-5'>Sign up</h1>
        </div>


          <form className='flex flex-col items-center'>

            <input 
              className='w-[80vw] sm:w-[400px] my-3 border-b-[1.5px] pl-1 pb-2 focus:outline-none text-sm'
              type="text" 
              name="name" 
              placeholder='Full name' 
            />

            <input 
              className='w-[80vw] sm:w-[400px] my-3 border-b-[1.5px] pl-1 pb-2 focus:outline-none text-sm'
              type="email"
              name="email" 
              placeholder='E-mail'
             />

            <input 
              className='w-[80vw] sm:w-[400px] my-3 border-b-[1.5px] pl-1 pb-2 focus:outline-none text-sm'
              type="password" 
              name="password" 
              placeholder='Password' 
            />

          </form>


      </div>
    </section>
  )
}

export default SignUp