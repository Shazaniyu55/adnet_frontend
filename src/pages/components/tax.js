import React, { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import InputField from './inputfield';

export default function Page() {
  const [submittedData, setSubmittedData] = useState({
    cogs: null,
    revenue: null,
  }); // Separate state for COGS and Revenue data

  const schemaActivity = yup.object().shape({
    event: yup.string().required('Event is required'),
    amount: yup
      .number()
      .typeError('Amount must be a number')
      .required('Amount is required')
      .min(0, 'Amount cannot be negative'),
  });

  const schema = yup.object().shape({
    cogs: yup
      .array()
      .of(schemaActivity)
      .min(1, 'At least one COGS activity is required'),
    revenue: yup
      .array()
      .of(schemaActivity)
      .min(1, 'At least one Revenue source is required'),
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
      cogs: [{ event: '', amount: '' }],
      revenue: [{ event: '', amount: '' }],
    },
  });

  const { fields: cogsFields, append: appendCogs, remove: removeCogs } = useFieldArray({
    control,
    name: 'cogs',
  });

  const { fields: revenueFields, append: appendRevenue, remove: removeRevenue } = useFieldArray({
    control,
    name: 'revenue',
  });

  const onHandleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  const calculateGrossProfitRatio = () => {
    const totalCOGS = submittedData.cogs
      ? submittedData.cogs.reduce((total, item) => total + (parseFloat(item.amount) || 0), 0)
      : 0;
    const totalRevenue = submittedData.revenue
      ? submittedData.revenue.reduce((total, item) => total + (parseFloat(item.amount) || 0), 0)
      : 0;

    const grossProfit = totalRevenue - totalCOGS;
    const grossProfitRatio = totalRevenue ? (grossProfit / totalRevenue) * 100 : 0;

    return { grossProfit, grossProfitRatio };
  };

  const { grossProfit, grossProfitRatio } = calculateGrossProfitRatio();

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6">
      <h1 className="text-center font-semibold text-xl mb-4">Gross Profit Calculator</h1>

      <form onSubmit={handleSubmit(onHandleFormSubmit)} className="flex flex-col gap-6">
        {/* Section for COGS */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Cost of Goods Sold (COGS)</h2>
          {cogsFields.map((item, index) => (
            <div key={item.id} className="grid grid-cols-[1fr_5fr_2fr_1fr] items-center gap-4 mb-2">
              <span>{index + 1}</span>
              <InputField
                register={register}
                noTitle
                type="text"
                placeholder="Event"
                name={`cogs.${index}.event`}
                errors={errors?.cogs?.[index]?.event?.message}
              />
              <InputField
                register={register}
                noTitle
                type="number"
                placeholder="Amount"
                name={`cogs.${index}.amount`}
                errors={errors?.cogs?.[index]?.amount?.message}
              />
              <Button
                variant="contained"
                color="error"
                onClick={() => removeCogs(index)}
                className="min-w-[40px] h-[40px] flex items-center justify-center"
              >
                <DeleteOutlineIcon />
              </Button>
            </div>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => appendCogs({ event: '', amount: '' })}
          >
            Add COGS
          </Button>
        </div>

        {/* Section for Revenue */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Revenue</h2>
          {revenueFields.map((item, index) => (
            <div key={item.id} className="grid grid-cols-[1fr_5fr_2fr_1fr] items-center gap-4 mb-2">
              <span>{index + 1}</span>
              <InputField
                register={register}
                noTitle
                type="text"
                placeholder="Revenue Source"
                name={`revenue.${index}.event`}
                errors={errors?.revenue?.[index]?.event?.message}
              />
              <InputField
                register={register}
                noTitle
                type="number"
                placeholder="Amount"
                name={`revenue.${index}.amount`}
                errors={errors?.revenue?.[index]?.amount?.message}
              />
              <Button
                variant="contained"
                color="error"
                onClick={() => removeRevenue(index)}
                className="min-w-[40px] h-[40px] flex items-center justify-center"
              >
                <DeleteOutlineIcon />
              </Button>
            </div>
          ))}
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => appendRevenue({ event: '', amount: '' })}
          >
            Add Revenue
          </Button>
        </div>

        {/* Submit Button */}
        <Button variant="contained" type="submit" className="self-center w-[10rem]">
          Submit
        </Button>
      </form>

      {/* Display Results */}
      {submittedData.cogs && submittedData.revenue && (
        <div className="mt-8 border p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Results</h2>
          <p>Total COGS: ₦{submittedData.cogs.reduce((total, item) => total + (parseFloat(item.amount) || 0), 0)}</p>
          <p>Total Revenue: ₦{submittedData.revenue.reduce((total, item) => total + (parseFloat(item.amount) || 0), 0)}</p>
          <p>Gross Profit: ₦{grossProfit}</p>
          <p>Gross Profit Ratio: {grossProfitRatio.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}
