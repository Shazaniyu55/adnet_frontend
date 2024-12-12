import React, { useEffect } from 'react'
// import firebase from '../../../firebase/firebase'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { signUp } from '@/store/slice/userslice';

export default function Final({values}) {

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.users);
  const handleSubmit = () => {
    dispatch(signUp(values));
  };

  useEffect(() => {
    if (success) {
      console.log("Submission successful!");
      // Perform navigation or display success message
    }
    if (error) {
      console.error("Submission error:", error);
      // Handle the error (e.g., show an alert or toast)
    }
  }, [success, error]);

  const {fullname, email, phoneNumber, password, plan} = values

    

    useEffect(() => {}, [])

  return (
    <div className='flex flex-col items-center justify-center'>
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
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-500 mt-2">Submission successful!</p>}
        </div>
  )
}