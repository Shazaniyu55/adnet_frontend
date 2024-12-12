import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login, updateState } from "@/store/slice/userslice";

function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { user, successful, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value, // Dynamically update the correct field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    dispatch(login(formData)); // Pass formData to login action
  };

  useEffect(() => {
    if (successful) {
      console.log("Submission successful!");
      // Perform navigation to the dashboard
      router.push("/dashboard");
    }

    if (error) {
      console.error("Submission error:", error);
      // Handle the error (e.g., show an alert or toast)
    }

    if (user._id) {
      router.push("/dashboard"); // Redirect if the user is already logged in
    }
  }, [successful, error, router, user]);

  return (
    <div className="relative container p-10 mt-10">
      <div className="bg-blue-600 p-10 px-5 md:px-16 mx-auto m-10 rounded-2xl">
        <div className="mt-12 flex flex-col gap-8">
          {/* Email input */}
          <label className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} // Bind formData to input value
              onChange={handleChange}
              placeholder="Email address"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Password input */}
          <label className="flex flex-col">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password} // Bind formData to input value
              onChange={handleChange}
              placeholder="Password"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* Submit button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-black py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
