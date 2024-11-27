import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Input from '../components/input'
import { User, Mail, Lock, Loader, CloudCog } from 'lucide-react'
import FloatingShapes from '../components/FloatingShapes'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'


const SignUpPage = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
   const navigate=useNavigate()

const { signup,error,isLoading }=useAuthStore();


  const handleSignUp = async(e) => {
    e.preventDefault();
      
    try{
      await signup(email,password,name);
      navigate("/verify-email");
      
    }catch(error){
      console.log(error);
    }
    
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full  m-2 bg-gradient-to-tl from-black  to-purple-800 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    >

      {/* <FloatingShapes color="bg-purple-800" size="w-20 h-20" top="0%" left="-5%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-40 h-40" top="10%" left="20%" delay={0} />
      <FloatingShapes color="bg-purple-800" size="w-24 h-24" top="5%" left="10%" delay={0} /> */}
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

      <div className='p-8 text-center' >
        <h2 className='text-2xl font-bold mb-3 '
        >Create Account</h2>

        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
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

        
        {error && <p className='text-red-500  mt-2'>{error}</p> }

        {/* password string component */}


        <motion.button
           className='bg-black px-16 py-2 rounded-lg font-bold hover:bg-purple-900 transition duration-300
           focus:outline-none  text-center'
           whileHover={{scale:1.05}}
           whileTap={{scale:0.8}}
           type='submit'
           disabled={isLoading}
        >
          {isLoading ? <Loader className='animate-spin mx-auto' size={24} />: "signup" }
        </motion.button>
          

        </form>
      </div>

      <div className='py-1 w-full bg-black flex justify-center z-1'  >
        Already Registered ? &nbsp;
        <Link to={"/login"} className='text-blue-900 hover:underline' > Login</Link>
      </div>
       
       
    </motion.div>
  )
}

export default SignUpPage