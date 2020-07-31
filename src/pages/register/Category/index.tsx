import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

interface FormData {
  name: string;
  description: string;
  color: string;
}

function RegisterCategory() {
  const initialFormData = {
    name: '',
    description: '',
    color: '',
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [categories, setCategories] = useState<FormData[]>([]);

  function setData(key: string, value: string) {
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setData(name, value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setCategories([...categories, formData]);
    setFormData(initialFormData);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição:"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor:"
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

        <ul>
          {categories.map((category, index) => (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          ))}
        </ul>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
