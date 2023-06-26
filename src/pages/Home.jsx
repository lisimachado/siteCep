import React from 'react';
import { FormEndereco } from '/src/components/Form/Form.jsx';

export const Home = () => {
  return (
	<div className="container">
		<h1>Formulário do CEP</h1>
		<FormEndereco />
	</div>
  )
};
