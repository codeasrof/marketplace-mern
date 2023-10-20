import {useState} from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response = await fetch("http://localhost:3003/api/auth/signin", {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if(data.success === true){
        setLoading(false)
        setError(null)
        navigate('/')
      }

    } catch (error) {

      setLoading(false)
      setError(error.message)

    }
  }


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
            text-white
            sm:text-neutral-950
            pt-10
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
            text-center
            sm:pt-[80px]
            '
        >
            <h1>Sign In</h1>

            <form 
              className='flex-col items-center justify-center'
              onSubmit={handleSubmit}
            >

              <input 
                className='
                  flex 
                  mx-auto 
                  sm:w-[450px] 
                  sm:h-[50px] 
                  my-3 
                  rounded-sm 
                  pl-3 
                  border-[2px] 
                  focus:border-amber-500 
                  outline-none
                  h-[35px]
                  pl-4
                '
                placeholder='E-mail'
                type="email" 
                name="email" 
                id="email" 
                onChange={handleChange}
              />

              <input
                className='
                  flex 
                  mx-auto 
                  sm:w-[450px] 
                  sm:h-[50px] 
                  my-3 
                  rounded-sm 
                  pl-3 border-[2px] 
                  focus:border-amber-500 
                  outline-none
                  h-[35px]
                  pl-4
                '
                placeholder='Password'
                type="password" 
                name="password" 
                id="password" 
                onChange={handleChange}
              />

              <input 
                className='
                  bg-amber-500 
                  w-[50vw]
                  mt-4
                  py-2
                  sm:w-[300px] 
                  sm:h-[45px] 
                  sm:mt-3 
                  rounded-md 
                  mb-6 
                  text-white 
                  cursor-pointer                  
                '
                type="submit"
                value="sign in" 
              />

            </form>
            <div>
              <p>Don't have account? <span className='text-amber-500'><Link to="signup">create</Link></span></p>
            </div>
            {error && <p className='text-red-500'>{error}</p>}
        </div>
      </section>
  )
}

export default SignIn