
export default function Document({values, handleChange}) {
    return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                   Upload Business License
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="file"
            onChange={handleChange('medicalLicense')}
            value={values.medicalLicense}
            name='medicalLicense'
            placeholder=" License"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>

        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Upload a clear proof of Address
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="file"
            onChange={handleChange('proofOfAddress')}
            value={values.proofOfAddress}
            name='proofOfAddress'
            placeholder="Clear Proof of Address"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold font-mono h-6 mt-3 text-gray-500 text-sm
            leading-8 uppercase">
                    Upload Clear front view of Business
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input type="file"
            onChange={handleChange('frontViewOfHospital')}
            value={values.frontViewOfHospital}
            name='fontViewOfHospital'
            placeholder="Front View of Business"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800 placeholder:text-sm placeholder:gray-500 placeholder:opacity-50 placeholder:font-mono"
            />
            </div>
        </div>

    </div>
  )
}
