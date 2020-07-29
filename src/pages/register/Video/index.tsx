import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function RegisterVideo() {
  return (
    <PageDefault>
      <h1>Cadastrar Video</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
