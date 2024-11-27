import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import FloatingShapes from './components/FloatingShapes'
import {Routes , Route, Navigate} from "react-router-dom"
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import EmailVerificationPage from './pages/EmailVerificationPage'
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import DashboardPage  from './pages/DashboardPage'
import LoadingSpinner from './components/LoadingSpinner'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from "./pages/ResetPasswordPage";





// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}
  
  
	if (!user.isverified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};



const RedirectAuthenticatedUser=({children})=>{
  const {isAuthenticated,user}=useAuthStore();
    
  if(isAuthenticated && user.isverified){
    return <Navigate to="/" replace />
  }

  return children;

}


function App() {
 
  const {isCheckingAuth,checkAuth}=useAuthStore();

  useEffect(()=>{
     checkAuth();
  },[checkAuth])

  if(isCheckingAuth) return <LoadingSpinner/>
 
 

  return (
      <div className='min-h-screen bg-gradient-to-br from-black via-black to-purple-900 
      flex items-center justify-center relative overflow-hidden text-white'>
             <FloatingShapes  color="bg-purple-800"  size="w-20 h-20" top="0%" left="-5%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-40 h-40" top="10%" left="20%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-24 h-24" top="5%" left="10%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-20 h-20" top="5%" left="70%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-32 h-32" top="-10%" left="50%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-44 h-44" top="5%" left="20%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-24 h-24" top="0%" left="4%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-24 h-24" top="70%" left="10%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-20 h-20" top="50%" left="10%" delay={0} />
             <FloatingShapes  color="bg-purple-800"  size="w-20 h-20" top="10%" left="45%" delay={0} />
             <FloatingShapes  color="bg-black"  size="w-32 h-32" top="50%" left="50%" delay={0} /> 
             <FloatingShapes  color="bg-black"  size="w-20 h-20" top="60%" left="80%" delay={0} /> 
             <FloatingShapes  color="bg-black"  size="w-20 h-20" top="50%" left="70%" delay={0} /> 

              <Routes>
                <Route path='/'  element={
                <ProtectedRoute>
                 <DashboardPage/>
                </ProtectedRoute>
                } />
                <Route path='/signup' element={
                  <RedirectAuthenticatedUser>
                    <SignUpPage/>
                  </RedirectAuthenticatedUser>
                } />
                <Route path='/login' element={
                  <RedirectAuthenticatedUser>
                    <LoginPage/>
                    </RedirectAuthenticatedUser>
                } />
                <Route path='/verify-email' element={
                  <EmailVerificationPage/>
                  } />

                <Route
			      		path='/forgot-password'
				      	element={
				    		<RedirectAuthenticatedUser>
				  			<ForgotPasswordPage />
			    			</RedirectAuthenticatedUser>
			       		}
			         	/>
               

                 
               <Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>




              </Routes>

             <Toaster/>

      </div>
  );
}

export default App
