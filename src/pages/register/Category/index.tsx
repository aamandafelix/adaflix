import React, { useState, FormEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

import categoriesAPI from '../../../api/categories';

interface FormData {
  id: number;
  title: string;
  description: string;
  color: string;
}

function RegisterCategory() {
  const history = useHistory();

  const initialFormData = {
    id: 0,
    title: '',
    description: '',
    color: '',
  };

  const { formData, handleChange } = useForm(initialFormData);

  const [categories, setCategories] = useState<FormData[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const category = {
      title: formData.title,
      color: formData.color,
    };
    categoriesAPI.create(category)
      .then(() => {
        history.push('/');
      });

    // setCategories([...categories, formData]);
    // clearForm();
  }

  useEffect(() => {
    categoriesAPI
      .getAll()
      .then((categoriesResponse) => {
        setCategories([...categoriesResponse]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="title"
          value={formData.title}
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
              {category.title}
            </li>
          ))}
        </ul>

        <Button>
          Cadastrar
        </Button>
      </form>

      <br />

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
