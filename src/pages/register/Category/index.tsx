import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

interface FormData {
  id: number;
  name: string;
  description: string;
  color: string;
}

function RegisterCategory() {
  const initialFormData = {
    id: 0,
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

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://adaflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        const formatedResponse = await response.json();
        setCategories([...formatedResponse]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />

        {categories.length === 0 && (
          <div>
            Carregando...
          </div>
        )}

        <ul>
          {categories.map((category, index) => (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          ))}
        </ul>

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
