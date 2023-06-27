import React from 'react';
import { FormEndereco } from '/src/components/Form/Form.jsx';
import "./styleHome.css";

export const Home = () => {
	return (
		<div className="container">
			<h3 className='text-center mt-5 mb-5'>Digite abaixo o CEP para busca do endereço desejado:</h3>
			<FormEndereco />
		</div>
	)
};
