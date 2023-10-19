
import {useState} from 'react'
import {Link} from "react-router-dom"

const SignUp = () => {  
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    setLoading(true)
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response  = await fetch("http://localhost:3003/api/auth/signup", formData,{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()
    if(data.success === false){
      setLoading(false)
      setError(data.message)
      return;
    }
    setLoading(false)
    console.log(formData)
  }

  return (
    <section className='flex items-center justify-center flex-col'>
      <div className='flex text-center py-6 flex-col w-[100vw]'>

        <div>
          <h1 className='text-emerald-600 font-medium text-xl mb-5'>Sign up</h1>
        </div>


          <form 
            onSubmit={handleSubmit}
            className='flex flex-col items-center max-w-[600px] mx-auto'
          >

            <input 
              onChange={handleChange}
              id='name'
              className='w-[80vw] sm:w-[400px] my-3 border-b-[1.5px] pl-1 pb-2 focus:outline-none text-sm'
              type="text" 
              name="name" 
              placeholder='Full name' 
            />

            <input 
              onChange={handleChange}
              id='email'
              className='w-[80vw] sm:w-[400px] my-3 border-b-[1.5px] pl-1 pb-2 focus:outline-none text-sm'
              type="email"
              name="email" 
              placeholder='E-mail'
             />

            <input 
              onChange={handleChange}
              id='password'
              className='w-[80vw] sm:w-[400px] my-3 border-b-[1.5px] pl-1 pb-2 focus:outline-none text-sm'
              type="password" 
              name="password" 
              placeholder='Password' 
            />

            <input 
              disabled={loading}
              className='w-[100%] bg-emerald-600 py-3 mt-3 rounded-md text-white cursor-pointer'
              type="submit" 
              value={`${loading ? 'Loading...' : 'Sign up'}`} 
            />

          </form>
          <div className='text-sm mt-3'>
            <p>already have account? <span className='text-emerald-600'><Link to="signin">
                Sign In
            </Link></span></p>
         
          </div>
      </div>
    </section>
  )
}

export default SignUp