import React, { useEffect, useState, FormEvent } from 'react';
import PageDefault from '../../../components/PageDefault';
import { useHistory, Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Category } from '../../../types';

import videosAPI from '../../../api/videos';
import categoriesAPI from '../../../api/categories';

function RegisterVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState<Category[]>([]);

  const categoryTitles = categorias.map(({ title }) => title);

  const { handleChange, formData } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesAPI
      .getAll()
      .then((categoriesResponse) => {
        setCategorias(categoriesResponse);
      });
  }, []);

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const categoryChoosed = categorias
      .find((category: Category) => {
        return category.title === formData.category;
    });

    const video = {
      titulo: formData.title,
      url: formData.url,
      categoriaId: categoryChoosed?.id,
    };
    videosAPI.create(video)
      .then(() => {
        history.push('/');
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleOnSubmit}
      >
        <FormField
          label="Título do Vídeo"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          type="text"
          value={formData.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar Vídeo
        </Button>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
