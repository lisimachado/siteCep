import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IMaskInput } from 'react-imask';
import Button from 'react-bootstrap/Button';

export function FormEndereco() {
  const [cep, setCep] = useState('');
  const [ibge, setIbge] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

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

    console.log('Formulário enviado');
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
				<div className="form-group row">
					<Form.Group className="col-3" id="form_cep">
						<Form.Label>CEP</Form.Label>
						<Form.Control
							onBlur={buscarCEP}
							as={IMaskInput}
							mask="00000000"
							value={cep}
							//onChange={(e) => setCep(e.target.value)}
							required />
					</Form.Group>
				</div>
				
				<Form.Group className="col-4" id="form_ibge">
					<Form.Label>Código IBGE</Form.Label>
					<Form.Control 
						type="number"
						value={ibge}
						required
						//onChange={e => setIbge(e.target.value)}
						/>
				</Form.Group>

				<Form.Group className="col-7" id="form_logradouro">
					<Form.Label>Logradouro</Form.Label>
					<Form.Control
						type="text"
						value={logradouro}
						//onChange={e => setLogradouro(e.target.value)}
						required
						/>
				</Form.Group>

				<Form.Group className="col-4" id="form_complemento">
					<Form.Label>Complemento</Form.Label>
					<Form.Control type="text"
						value={complemento}
						//onChange={e => setComplemento(e.target.value)}
						/>
				</Form.Group>

				<Form.Group className="col-5" id="form_bairro">
					<Form.Label>Bairro</Form.Label>
					<Form.Control
						type="text"
						value={bairro}
						//onChange={e => setBairro(e.target.value)}
						required
						/>
				</Form.Group>

				<Form.Group className="col-8" id="form_localidade">
					<Form.Label>Localidade</Form.Label>
					<Form.Control
						type="text"
						value={localidade}
						//onChange={e => setLocalidade(e.target.value)}
						required
						/>
				</Form.Group>

				<Form.Group className="col-4" id="form_uf">
					<Form.Label>Estado/UF</Form.Label>
					<Form.Control
						type="text"
						value={uf}
						//onChange={e => setUf(e.target.value)}
						required
						/>
				</Form.Group>

				<Button
					className="btn-envio"
					variant="success"
					type="submit"
					id="btn-cadastro"
					>
					Confirmar
					</Button>
			</Form>
		</div>
		)
			
	}
