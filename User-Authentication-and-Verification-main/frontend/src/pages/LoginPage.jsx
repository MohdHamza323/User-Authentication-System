import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Loader } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from 'react'
import Input from '../components/input'
import FloatingShapes from '../components/FloatingShapes'
import { useAuthStore } from '../store/authStore'

const LoginPage = () => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  

  const { login, isLoading, error } = useAuthStore();

	const handleloginpage = async (e) => {
		e.preventDefault();
		await login(email, password);
	};






  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full  m-2 bg-gradient-to-tl from-black  to-purple-800 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    >

      <FloatingShapes color="bg-purple-800" size="w-16 h-16" top="5%" left="70%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-32 h-32" top="-10%" left="50%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-32 h-32" top="10%" left="25%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-24 h-24" top="0%" left="4%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-24 h-24" top="70%" left="10%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-20 h-20" top="50%" left="10%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-20 h-20" top="10%" left="45%" delay={0} />
      <FloatingShapes color="bg-black" size="w-32 h-32" top="0%" left="0%" delay={0} />
      <FloatingShapes color="bg-black" size="w-32 h-32" top="10%" left="10%" delay={0} />
      <FloatingShapes color="bg-black" size="w-32 h-32" top="0%" left="0%" delay={0} />


      <div className='p-8 ' >
        <h2 className='text-2xl font-bold mb-3 text-center'
        >
          Logged In
        </h2>

        <form onSubmit={handleloginpage}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Enter Mail"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />


          <div>
            <Link to={"/forgot-password"} className='hover:underline' >
              Forgot Password ?
            </Link>
          </div>
            
          {error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}


          <div className='text-center' >
            <motion.button className='bg-black text-center px-16 py-2 hover:bg-purple-900 transition duration-300
           focus:outline-none  rounded-lg mt-2 ' 
           whileHover={{scale:1.05}}
           whileTap={{scale:0.8}}
           >
              {isLoading ? <Loader className='w-6 h-6 animate-spin' /> : <div className='font-bold' >Login</div>}
            </motion.button>
          </div>


        </form>
      </div>

      <div className='py-1 w-full bg-black flex justify-center z-1'  >
        Don't have an Account ? &nbsp;
        <Link to={"/signup"} className='text-blue-900 hover:underline' >Sign Up</Link>
      </div>

    </motion.div>
  )
}

export default LoginPage