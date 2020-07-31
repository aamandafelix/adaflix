import React, { ChangeEventHandler } from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}

function FormField({
  label, type, name, value, onChange,
}: FormFieldProps) {
  const fieldId = `id_${name}`;

  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        <input
          id={fieldId}
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
