import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ register, name, errors, type = 'text', noTitle = false, endAdorn = '' }) => {
  return (
    <div className='w-full'>
      {/* Conditionally render title if not `noTitle` */}
      {!noTitle && <label htmlFor={name} className="block font-medium">{name}</label>}
      
      <TextField
        fullWidth
        type={type}
        id={name}
        name={name}
        inputRef={register}  // Hook for registering the input with React Hook Form
        error={!!errors}  // If there's an error, show the error style
        helperText={errors}  // Display the error message if it exists
        variant="outlined"
        className="mt-2"
        InputProps={{
          endAdornment: endAdorn ? <span>{endAdorn}</span> : null, // Add the end adornment if any
        }}
      />
    </div>
  );
};

export default InputField;
