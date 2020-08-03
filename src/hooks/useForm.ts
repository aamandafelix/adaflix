import { useState, ChangeEvent } from 'react';

function useForm(initialFormData: any) {
  const [formData, setFormData] = useState<any>(initialFormData);

  function setData(key: string, value: string) {
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleChange(
    event: ChangeEvent<any>
  ) {
    const { name, value } = event.target;
    setData(name, value);
  }

  function clearForm() {
    setFormData(initialFormData);
  }

  return {
    formData,
    handleChange,
    clearForm
  };
}

export default useForm;
