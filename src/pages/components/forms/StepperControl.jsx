import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
        <button onClick={() =>handleClick()} className={`bg-gray text-black[200] uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300
        hover:bg-blue-500 hover:text-white transition duration-200
        ease-in-out ${currentStep === 1
        ? "opacity-50 cursor-not-allowed" : ""}`}>
            Back
        </button>

        {/* next button */}
        <button onClick={() =>handleClick("next")} className='bg-blue-500 text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer
        hover:bg-black hover:text-white transition duration-200
        ease-in-out'>
            {currentStep === steps.length - 1 ? "confirm" : "Next"}
        </button>
    </div>
  )
}

export default StepperControl