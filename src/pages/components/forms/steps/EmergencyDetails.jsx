
export default function EmergencyDetails({values, handleChange}) {
   
    return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Country
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('country')}
            value={values.country}
            name='country'
            placeholder="Country"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>

        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Password
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="text"
            onChange={handleChange('password')}
            value={values.password}
            name='password'
            placeholder="password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

        

    </div>
  )
}
