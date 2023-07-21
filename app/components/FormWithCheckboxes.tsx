// FormWithCheckboxes.tsx

import React, { useState } from 'react';

 interface CheckboxState {
    [key: string]: boolean;
  }

interface CheckboxOption {
  name: string;
  label: string;
}

interface FormWithCheckboxesProps {
  options: CheckboxOption[];
  onChangeCheckbox: (data: CheckboxState) => void;
}

const FormWithCheckboxes: React.FC<FormWithCheckboxesProps> = ({ options, onChangeCheckbox }) => {
  const initialCheckboxState: CheckboxState = options.reduce((acc: CheckboxState, option) => {
    acc[option.name] = false;
    return acc;
  }, {});

  const [checkboxState, setCheckboxState] = useState<CheckboxState>(initialCheckboxState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxState({
      ...checkboxState,
      [name]: checked,
    });
    onChangeCheckbox({
        ...checkboxState,
      [name]: checked,
    })
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="container mx-auto my-8" onSubmit={handleSubmit}>
      {options.map((option) => (
        <label key={option.name} className="flex items-center space-x-2">
          <input
            type="checkbox"
            name={option.name}
            checked={checkboxState[option.name]}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </form>
  );
};

export default FormWithCheckboxes;
