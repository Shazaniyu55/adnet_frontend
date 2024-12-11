
export default function HospitalDetails({values, handleChange}) {
   
    return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    FullName
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded ">
            <input type="text"
            onChange={handleChange('hospitalName')}
            value={values.hospitalName}
            name='hospitalName'
            placeholder="FullName"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>

        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Email
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="email"
            onChange={handleChange('hospitalEmail')}
            value={values.hospitalEmail}
            name='hospitalEmail'
            placeholder=" Email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Business Registration Number
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="number"
            onChange={handleChange('hospitalRegNumber')}
            value={values.hospitalRegNumber}
            name='hospitalRegNumber'
            placeholder="Business Registration Number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Address
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('hospitalAddress')}
            value={values.hospitalAddress}
            name='hospitalAddress'
            placeholder=" Address"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

    </div>
  )
}
