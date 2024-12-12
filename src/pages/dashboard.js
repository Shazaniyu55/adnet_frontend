import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slice/userslice";


function dashboard(){
    const dispatch = useDispatch();
    const [mounted, setMounted] = useState(false);
    const { _id, fullname, phoneNumber, email, plan, country } = useSelector((state) => state.users.user);
    useEffect(() => {
        setMounted(true); // Set mounted to true after component mounts
      }, []);

      const handleLogout = () => {
        dispatch(logout()); // Dispatch the logout action
      };
    
      if (!mounted) {
        // Return null or a loading state during SSR phase
        return null;
      }


    
        return(
                <>
                <h1>{_id}</h1>
                <h1>{fullname}</h1>
                <h1>{phoneNumber}</h1>
                <h1>{email}</h1>
                <h1>{country}</h1>

                <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
                </>
        );
}

export default dashboard;