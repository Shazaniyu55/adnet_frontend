import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import InputField from './inputfield';

export default function Page() {
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  const schemaActivity = yup.object().shape({
    event: yup.string().required('Event is required'),
    cost_of_goods_sold: yup
      .number()
      .typeError('COGS must be a number')
      .required('Cost of Goods Sold is required')
      .min(0, 'COGS cannot be negative'),
  });

  const schema = yup.object().shape({
    engagement_activity: yup
      .array()
      .of(schemaActivity)
      .min(1, 'At least one engagement activity is required'),
  });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: {
      engagement_activity: [
        {
          event: '',
          cost_of_goods_sold: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'engagement_activity',
  });

  const onHandleFormSubmit = (data) => {
    setSubmittedData(data); // Store submitted data in state
  };

  const handleRemove = (index) => {
    // Remove the item from the form
    remove(index);

    // Update the submitted data dynamically if it exists
    if (submittedData) {
      const updatedData = {
        ...submittedData,
        engagement_activity: submittedData.engagement_activity.filter((_, i) => i !== index),
      };
      setSubmittedData(updatedData);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto grid place-items-center">
      <form onSubmit={handleSubmit(onHandleFormSubmit)} className="flex flex-col gap-4 w-full">
        <h1 className="text-center font-semibold text-lg">Calculate Gross Profit</h1>

        <h2 className="text-center font-semibold text-lg">Calculate COGS</h2>

        <div className="flex flex-col gap-8 p-6 border rounded-lg max-h-[70vh] overflow-auto">
          <div className="grid grid-cols-[1fr_10fr_10fr_10fr_1fr] text-sm w-full py-2 items-center">
            <div className="font-semibold">No.</div>
            <div className="font-semibold">Revenue Sources</div>
            <div className="font-semibold">COGS</div>
            <div className="font-semibold"></div>
          </div>
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_10fr_10fr_10fr_1fr] text-sm w-full py-2 items-center"
            >
              <div className="ml-2">{index + 1}</div>
              <div className="pr-4">
                <InputField
                  register={register}
                  noTitle
                  type="text"
                  errors={errors?.engagement_activity?.[index]?.event?.message}
                  name={`engagement_activity.${index}.event`}
                />
              </div>

              <div className="pr-4">
                <InputField
                  register={register}
                  noTitle
                  type="number"
                  errors={errors?.engagement_activity?.[index]?.cost_of_goods_sold?.message}
                  name={`engagement_activity.${index}.cost_of_goods_sold`}
                />
              </div>
              <div className="flex items-center justify-end">
                {index > 0 && (
                  <button
                    className="grid place-items-center h-10 w-10 bg-red-500 text-white hover:bg-red-700 shadow-lg duration-300 rounded-md cursor-pointer border-none outline-none"
                    type="button"
                    onClick={() => handleRemove(index)}
                  >
                    <DeleteOutlineIcon />
                  </button>
                )}
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between mt-5">
            <Button
              variant="contained"
              className="capitalize shadow-none px-6 bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
              startIcon={<AddIcon />}
              onClick={() => {
                append({ event: '', cost_of_goods_sold: '' });
              }}
            >
              Add
            </Button>
          </div>
        </div>
        <Button variant="contained" type="submit" className="w-[10rem]">
          Submit
        </Button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-6 w-full p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold">COGS Data</h2>
          <pre className="mt-2 p-2 bg-gray-100 rounded-md overflow-auto text-sm">
            {JSON.stringify(submittedData, null, 2)}
          </pre>

          {/* Calculate and Display Total COGS */}
          <div className="mt-4 p-2 bg-gray-100 rounded-md text-sm">
            <h3 className="text-md font-semibold">Total Cost of Goods Sold (COGS)</h3>
            <p className="mt-1 text-blue-500 font-bold">
              ₦
              {submittedData.engagement_activity
                .reduce((total, activity) => total + (parseFloat(activity.cost_of_goods_sold) || 0), 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
