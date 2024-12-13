'use client'; // you can remove this if you just use React

import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import InputField from './inputfield';


export default function Page() {

  const schemaActivity = yup.object().shape({
    event: yup.string().required('Event is Required'),
    audience: yup.string().required('Audience is Required'),
  });

  const schema = yup.object().shape({
    engagement_activity: yup.array().of(schemaActivity).required(),
  });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      engagement_activity: [{
        event: '',
        audience: ''
      }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'engagement_activity'
  });

  const onHandleFormSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='w-full max-w-[1000px] mx-auto grid place-items-center'>
      <form onSubmit={handleSubmit(onHandleFormSubmit)} className='flex flex-col gap-4 w-full'>
        <h2 className='text-center font-semibold text-lg'>Activity</h2>
        <div className='flex flex-col gap-4 p-6 border rounded-lg max-h-[70vh] overflow-auto'>
          <div className='grid grid-cols-[1fr_10fr_10fr_1fr] text-sm w-full py-2 items-center'>
            <div className='font-semibold'>No.</div>
            <div className='font-semibold'>Daily Income</div>
            <div className='font-semibold'>Expenditure</div>
            <div className='font-semibold'></div>
          </div>
          {
            fields.map((item, index) => (
              <div key={item.id} className='grid grid-cols-[1fr_10fr_10fr_1fr] text-sm w-full py-2 items-center'>
                <div className='ml-2'>{index + 1}</div>
                <div className="pr-4">
                  {/* <InputField
                    noTitle
                    type='text'
                    register={register}
                    errors={errors?.engagement_activity?.[index]?.event?.message}
                    name={`engagement_activity.${index}.event`}
                  /> */}
                  {/* <InputField
                  noTitle
                  type='text'
                  register={register}
                  errors={errors?.engagement_activity?.[index]?.event?.message}
                  name={`engagement_activity.${index}.event`}
                  /> */}
                </div>
                <div className="pr-4">
                  {/* <InputField
                    noTitle
                    type='number'
                    endAdorn='Person'
                    register={register}
                    errors={errors?.engagement_activity?.[index]?.audience?.message}
                    name={`engagement_activity.${index}.audience`}
                  /> */}
                </div>
                <div className='flex items-center justify-end'>
                  {
                    index > 0 && (
                      <button
                        className='grid place-items-center h-10 w-10 bg-red-500 text-white hover:bg-blue hover:text-blue-500 shadow-lg duration-300 rounded-md cursor-pointer border-none outline-none'
                        type="button"
                        onClick={() => remove(index)}>
                        <DeleteOutlineIcon />
                      </button>
                    )
                  }
                </div>
              </div>
            ))
          }

          <div className='flex items-center justify-between mt-5'>
            <Button
              variant='contained'
              className='capitalize shadow-none px-6 bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white'
              startIcon={<AddIcon />}
              onClick={() => {
                append({ event: "", audience: '' });
              }}>
              Add
            </Button>
          </div>
        </div>
        <Button
          variant='contained'
          type='submit'
          className='w-[10rem]'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
