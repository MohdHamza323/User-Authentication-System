import React, { useState,useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import FloatingShapes from '../components/FloatingShapes'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';
import { Loader } from 'lucide-react';

const EmailVerificationPage = () => {
    const[code,setcode]=useState(["","","","","",""])
    const inputRefs=useRef([]);
    const navigate=useNavigate();
    
     
    const{error,isLoading,verifyEmail}=useAuthStore()



    const handlChange=(index,value)=>{
        const newCode=[...code];
        console.log(newCode)
        if(value.length>1){
               const pastedCode=value.slice(0,6).split("");
               for(let i=0;i<6;i++)
               {
                newCode[i]=pastedCode[i] || "";
               }
               setcode(newCode)
3

               //focus on the last non-empty input or thr first empty one
               const  lastFilledIndex=newCode.findLastIndex((digit)=> digit !=="");
               const focusIndex=lastFilledIndex < 5 ? lastFilledIndex+1 : 5;
               inputRefs.current[focusIndex].focus();
         }else{
            
            newCode[index]=value;
            setcode(newCode);

            if(value && index<5){
                inputRefs.current[index+1].focus();
            }


         }

    };

    const handleKeyDown=(index,e)=>{
      console.log("mjfnj")
        if(e.key === "Backspace" && !code[index] && index >0){
         
            inputRefs.current[index-1].focus();
        }
    };




    const handleSubmit=async(e)=>{
    e.preventDefault();
        const verificationCode=code.join("")
        try{
          await verifyEmail(verificationCode);
          navigate("/");
          toast.success("Email verified succefully")
        }
        catch(error){
              console.log(error)
        }
    }

    useEffect(()=>{
      if(code.every(digit => digit !== "")){
        handleSubmit(new Event('submit'));
      }
    },[code]);


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

      <div className='p-8 text-center' >
        <h2 className='text-2xl font-bold mb-3  '
        >Verify Your EMAIL</h2>

        <p className='mb-3' >Enter the 6-digit code sent to your email address</p>


         <form onSubmit={handleSubmit} className='space-y-6' >
            <div className='flex justify-between' >
             {code.map((digit,index)=>(
                <input
                  key={index}
                  ref={(el)=>(inputRefs.current[index]=el)}
                  type="text"
                  maxLength='6'
                  value={digit}
                  onChange={(e)=> handlChange(index,e.target.value)}
                  onKeyDown={(e)=> handleKeyDown(index,e)}
                  className='w-12 h-12 font-bold text-2xl rounded-lg text-black text-center '
                  />
             ))}
            </div>

            {error && <p className='text-red-500  mt-2'>{error}</p> }
            <div className='text-center' >
            <motion.button className='bg-black text-center px-16 py-2 hover:bg-purple-900 transition duration-300
           focus:outline-none focus:ring-2 focus:ring-green-500  rounded-lg mt-2 '
            whileHover={{scale:1.05}}
           whileTap={{scale:0.8}}
             type="submit"
             disabled={isLoading || code.some((digit)=> !digit)}
            >
              {isLoading ? <Loader className='w-6 h-6 animate-spin' /> : <div className='font-bold' >Verify Email</div>}
            </motion.button>
          </div>
         </form>

      
    </div>
</motion.div>
  )
}

export default EmailVerificationPage