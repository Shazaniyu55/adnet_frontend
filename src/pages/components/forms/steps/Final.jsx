import React, { useEffect } from 'react'
// import firebase from '../../../firebase/firebase'
// import { useNavigate } from 'react-router-dom'


export default function Final({values}) {


  // const {medicalLicense, proofOfAddress, frontViewOfHospital, emergencyNumber, onSitDoctor, hospitalName,
  //   hospitalEmail,
  //   hospitalRegNumber,
  //   hospitalAddress,} = values

  //   useEffect(() => {
  //     firebase.firestore().collection("QuickmedServiceProviderForms").doc().set({
  //       hospitalName:hospitalName,
  //       hospitalEmail:hospitalEmail,
  //       hospitalRegNumber:hospitalRegNumber,
  //       hospitalAddress:hospitalAddress,
  //       onSitDoctor: onSitDoctor,
  //       medicalLicense: medicalLicense,
  //       emergencyNumber:emergencyNumber,
  //       proofOfAddress: proofOfAddress,
  //       frontViewOfHospital: frontViewOfHospital,
  //     }).then( (data) =>
  //       console.log(data)
  //     ).catch( (err) =>
  //       console.log(err)
  //     )
  //   }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <ul className='text-gray-600 font-mono text-lg'>
        <li>hospitalName: {hospitalName}</li>
        <li>hospitalEmail: {hospitalEmail}</li>
        <li>hospitalRegNumber: {hospitalRegNumber}</li>
        <li>hospitalAddress: {hospitalAddress}</li>
        <li>onSitDoctor: {onSitDoctor}</li>
        <li>medicalLicense: {medicalLicense}</li>
        <li>emergencyNumber: {emergencyNumber}</li>
        <li>proofOfAddress: {proofOfAddress}</li>
        <li>frontViewOfHospital: {frontViewOfHospital}</li>
      </ul> */}
        <br />
    <button className="bg-sky-500 hover:bg-sky-700 w-40 sm:w-96  text-white font-bold font-mono py-2 px-4  rounded focus:outline-none focus:shadow-outline" type="submit" onClick={next}>
           completed
            </button>
            <a href='' onClick={next} className='text-sm font-medium text-gray-600'>Click to go to homepage</a>
        </div>
  )
}