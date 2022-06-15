import { useForm } from 'react-hook-form';
import React from 'react';

const ContactForm = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = data => handleFormSubmit(data);

  return (
    <div>
      <div className="">
        <h1 className="heading-color has-text-weight-semibold is-size-2 mb-5">
          Get In Touch
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="columns">
            <div className="field column">
              <div className="control">
                <input
                  input
                  className="input is-medium"
                  placeholder="Enter Your Name"
                  {...register('name', { required: true })}
                  error={errors.name?.type === 'required' && 'Name is required'}
                  onChange={e => setValue('name', e.target.value)}
                />
              </div>
            </div>

            <div className="field column">
              <div className="control">
                <input
                  input
                  className="input is-medium"
                  placeholder="Enter Phone Number"
                  {...register('phoneNumber', { required: true })}
                  error={
                    errors.phoneNumber?.type === 'required' &&
                    'Phone Number is required'
                  }
                  onChange={e => setValue('phoneNumber', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                input
                className="input is-medium"
                placeholder="Enter your message"
                {...register('message', { required: true })}
                error={
                  errors.message?.type === 'required' && 'Message is required'
                }
                onChange={e => setValue('message', e.target.value)}
              />
            </div>
          </div>

          <div className="field is-grouped pt-5">
            <div className="control">
              <button
                type="submit"
                className="is-rounded is-size-5 has-text-weight-medium">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
