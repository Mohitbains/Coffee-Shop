/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import React from 'react';

const Form = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = data => handleFormSubmit(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full my-12">
      <div className="">
        <input
          className="mb-4 rounded w-full py-2 px-3 text-black leading-tight"
          id="Name"
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
          error={errors.name?.type === 'required' && 'Name is required'}
          onChange={e => setValue('name', e.target.value)}
        />
        <input
          className="mb-4 rounded w-full py-2 px-3 text-black leading-tight"
          id="phone"
          type="number"
          placeholder="Phone Number"
          {...register('phone', { required: true })}
          error={
            errors.phone?.type === 'required' && 'Phone Number is required'
          }
          onChange={e => setValue('email', e.target.value)}
        />
        <input
          className="mb-4 rounded w-full py-2 px-3 text-black leading-tight"
          rows="4"
          id="message"
          type="text"
          placeholder="Message"
          {...register('message', { required: true })}
          error={errors.message?.type === 'required' && 'Message is required'}
          onChange={e => setValue('message', e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-10 py-3 bg-yellow-900 text-white rounded-full font-semibold">
        Send Message
      </button>
    </form>
  );
};

export default Form;
