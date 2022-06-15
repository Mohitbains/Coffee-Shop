/* eslint-disable import/no-unresolved */
import React from 'react';

const Form = () => (
  <form className="w-full my-12">
    <div className="">
      <input
        className="mb-4 rounded w-full py-2 px-3 text-black leading-tight"
        id="Name"
        type="text"
        placeholder="Name"
      />
      <input
        className="mb-4 rounded w-full py-2 px-3 text-black leading-tight"
        id="Email"
        type="text"
        placeholder="Email"
      />
      <textarea
        className="mb-4 rounded w-full py-2 px-3 text-black leading-tight"
        rows="4"
        id="message"
        type="text"
        placeholder="Message">
        {' '}
      </textarea>
    </div>
    <button
      type="submit"
      className="px-10 py-3 bg-yellow-900 text-white rounded-full font-semibold">
      Send Message
    </button>
  </form>
);

export default Form;
