'use client'
import React, { useContext, useState } from 'react'
import { ToDoContext } from './TodoContext';
import FormWithCheckboxes from '../components/FormWithCheckboxes';
export interface CheckboxState {
    [key: string]: boolean;
  }
  export interface CheckboxOption {
    name: string;
    label: string;
  }
  const initialCheckboxData: ICheckboxType = {
    option1: false,
    option2: false,
    option3: false,
  };
  interface ICheckboxType {
    option1: boolean;
    option2: boolean;
    option3: boolean;
    // Add more properties if you have additional checkboxes
  }

const Todo: React.FC<{}> = () => {
    const val = useContext(ToDoContext);
    const [checkboxData, setCheckBoxData] = useState<ICheckboxType>(initialCheckboxData);
    console.log({val})
    const checkboxOptions: CheckboxOption[] = [
        { name: 'option1', label: 'Option 1' },
        { name: 'option2', label: 'Option 2' },
        { name: 'option3', label: 'Option 3' },
      ];
    
      const onChangeCheckbox = (formData: CheckboxState) => {
        console.log('Form data in App:', formData);
        // Perform any further actions or API calls based on the form data
        setCheckBoxData(checkboxData);
      };

      console.log({checkboxData})

      const handleSubmit = () => {

      };
     return <>
        <h1>hello</h1>
        <div>
            <input type="text" name="" id="name" />
            <label htmlFor="name">Enter your Name</label>
            <div className="container mx-auto my-8">
            <FormWithCheckboxes options={checkboxOptions} onChangeCheckbox= {onChangeCheckbox} />
            <button onClick={handleSubmit}>Submit</button>
    </div>
        </div>
     </>
}

export default Todo;