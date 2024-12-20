import React from 'react';

const InputField = ({ register, name, errors, type = 'text', noTitle = false, endAdorn = '' }) => {
  return (
    <div className="w-full">
      {/* Conditionally render title if not `noTitle` */}
      {!noTitle && (
        <label htmlFor={name} className="block font-medium text-gray-700">
          {name}
        </label>
      )}

      {/* Input field with proper ref assignment */}
      <div className="relative mt-2">
        <input
          {...register(name)} // Assign React Hook Form's register directly
          type={type}
          id={name}
          className={`w-full px-4 py-2 border ${
            errors ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 ${
            errors ? 'focus:ring-red-500' : 'focus:ring-blue-500'
          }`}
        />
        {endAdorn && (
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
            {endAdorn}
          </span>
        )}
      </div>

      {/* Error message display */}
      {errors && <p className="mt-1 text-sm text-red-500">{errors}</p>}
    </div>
  );
};

export default InputField;
