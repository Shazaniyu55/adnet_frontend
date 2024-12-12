
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
            onChange={handleChange('fullname')}
            value={values.fullname}
            name='fullname'
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
            onChange={handleChange('email')}
            value={values.email}
            name='email'
            placeholder=" Email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    phoneNumber
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="number"
            onChange={handleChange('phoneNumber')}
            value={values.phoneNumber}
            name='phoneNumber'
            placeholder=" phoneNumber"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Plan
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('plan')}
            value={values.plan}
            name='plan'
            placeholder=" Plan"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

    </div>
  )
}
