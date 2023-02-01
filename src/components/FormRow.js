import React from 'react';

const FormRow = ({ id, type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
        autoComplete='off'
      />
    </div>
  );
};

export default FormRow;
