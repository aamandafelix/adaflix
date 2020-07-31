import React, { ChangeEventHandler } from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}

function FormField({ label, type, name, value, onChange }: FormFieldProps) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={(onChange)}
        />
      </label>
    </div>
  );
}

export default FormField;
