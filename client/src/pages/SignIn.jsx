import React from 'react'

const SignIn = () => {
  return (
      <section className='sm:flex relative sm:static'>
        <div 
          className='
            flex 
            items-center 
            justify-center 
            bg-[url("src/assets/login_building.jpg")] 
            h-screen w-[100vw] object-cover
            bg-center
            sm:w-[60vw] sm:object-contain
          '
        >
        </div>

        <div 
          className='
            flex-col 
            justify-center 
            w-[100vw]
            absolute
            top-0
            bg-neutral-950/[.8]
            h-[100vh]
            
            sm:w-[40vw] 
            sm:bg-slate-100
            sm:h-screen
            sm:flex-col
            sm:static

            '
        >
            <h1>Sign In</h1>

            <form>
              
            </form>
        </div>
      </section>
  )
}

export default SignIn