import React, { useEffect } from 'react'
// import firebase from '../../../firebase/firebase'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { signUp } from '@/store/slice/userslice';
import SuccessAlert from '../../alerts/success';
import ErrorAlert from '../../alerts/error';
import { useRouter } from "next/router";

export default function Final({values}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, successful, error, user } = useSelector((state) => state.users);
  const handleSubmit = () => {
    dispatch(signUp(values));
  };

  useEffect(() => {
    if (successful) {
      console.log("Submission successful!");
      // Perform navigation or display success message
    }
    if (error) {
      console.error("Submission error:", error);
      // Handle the error (e.g., show an alert or toast)
    }
    if (user) {
          router.push("/dashboard");
    }  
    

  }, [successful, error, user, router]);

  const {fullname, email, phoneNumber, password, plan} = values



  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Conditionally render success or error alerts */}
      {successful && <SuccessAlert message={successful} />}
      {error && <ErrorAlert message={error} />}
      <ul className='text-gray-600 font-mono text-lg'>
        <li>FullName: {fullname}</li>
        <li>Email: {email}</li>
        <li>Phone: {phoneNumber}</li>
        <li>Password: {password}</li>
        <li>Plan: {plan}</li>
    
      </ul>
        <br />
    <button className="bg-blue-600 hover:bg-sky-700 w-40 sm:w-96  text-white font-bold font-mono py-2 px-4  rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}
        disabled={loading}>
           {loading ? "Submitting..." : "Completed"}
            </button>
            
            
        </div>
  )
}