import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IMaskInput } from 'react-imask';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Form.css';

export function FormEndereco() {

	const navigate = useNavigate(); // Importando useNavigate

	const [formEnderecoValue, setFormEnderecoValue] = useState([]);
	const [cep, setCep] = useState('');
	const [ibge, setIbge] = useState('');
	const [logradouro, setLogradouro] = useState('');
	const [complemento, setComplemento] = useState('');
	const [bairro, setBairro] = useState('');
	const [localidade, setLocalidade] = useState('');
	const [uf, setUf] = useState('');


	//Limpar os campos dos inputs
	const limparDados = () => {
		setCep("");
		setIbge("");
		setLogradouro("");
		setComplemento("");
		setBairro("");
		setLocalidade("");
		setUf("");
	};
	//SALVAR NO LOCALSTORAGE
	const handleFormSubmit = (e) => {
		e.preventDefault();

		const novoEndereco = {
			cep,
			ibge,
			logradouro,
			complemento,
			bairro,
			localidade,
			uf,
		}

		try {
			const dadosEndereco = localStorage.getItem('dadosEndereco');
			let formularioAtualizado = [...formEnderecoValue];

			if (dadosEndereco) {
				formularioAtualizado = JSON.parse(dadosEndereco);
			}

			formularioAtualizado.push(novoEndereco);
			localStorage.setItem('dadosEndereco', JSON.stringify(formularioAtualizado));

			setFormEnderecoValue(formularioAtualizado);

			console.log('Dados salvos com sucesso!');
			limparDados(); // Limpa os dados após o envio
			navigate("/resultado");
		} catch (error) {
			console.log(error);
		};
	};


	const buscarCEP = (e) => {
		const cep = e.target.value.replace(/\D/g, '');
		console.log(cep);
		fetch(`https://viacep.com.br/ws/${cep}/json`)
			.then(res => res.json())
			.then(dados => {
				console.log(dados);

				setCep(dados.cep);
				setIbge(dados.ibge);
				setLogradouro(dados.logradouro);
				setComplemento(dados.complemento);
				setBairro(dados.bairro);
				setLocalidade(dados.localidade);
				setUf(dados.uf);
			})
	}

	return (
		<div className="container">
			<Form className="FormEndereco"
				onSubmit={handleFormSubmit}>

				<Form.Group className="label-input-inline col-sm-4 col-lg-4">
					<Form.Label className="col-sm-3 col-lg-6 text-end">CEP:</Form.Label>
					<Form.Control
						onBlur={buscarCEP}
						as={IMaskInput}
						mask="00000000"
						value={cep}
						required
						className="text-start" />

				</Form.Group>

				<Form.Group className="label-input-inline col-sm-4 col-lg-4">
					<Form.Label className="col-sm-3 col-lg-6 text-end">Código IBGE:</Form.Label>
					<Form.Control
						type="number"
						value={ibge}
						required
						className="text-start"
					/>

				</Form.Group>

				<Form.Group className="label-input-inline col-sm-3 col-lg-6">
					<Form.Label className="col-sm-3 col-lg-4 text-end">Logradouro:</Form.Label>
					<Form.Control
						type="text"
						value={logradouro}
						required
					/>
				</Form.Group>

				<Form.Group className="label-input-inline col-sm-3 col-lg-6" >
					<Form.Label className="col-sm-3 col-lg-4 text-end">Complemento:</Form.Label>
					<Form.Control type="text"
						value={complemento}
					/>
				</Form.Group>

				<Form.Group className="label-input-inline col-sm-3 col-lg-6">
					<Form.Label className="col-sm-3 col-lg-4 text-end">Bairro:</Form.Label>
					<Form.Control
						type="text"
						value={bairro}
						required
					/>
				</Form.Group>

				<Form.Group className="label-input-inline col-sm-3 col-lg-6">
					<Form.Label className="col-sm-3 col-lg-4 text-end">Localidade:</Form.Label>
					<Form.Control
						type="text"
						value={localidade}
						required
					/>
				</Form.Group>

				<Form.Group className="label-input-inline col-sm-4 col-lg-4">
					<Form.Label className="col-sm-3 col-lg-6 text-end">Estado:</Form.Label>
					<Form.Control
						type="text"
						value={uf}
						required
					/>
				</Form.Group>

				<Button
					className="btnConfimar"
					variant="success"
					type="submit"
				>
					Confirmar
				</Button>
			</Form>
		</div>
	)

}
