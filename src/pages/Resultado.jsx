import { listaEndereco } from '/src/components/Lista/Lista.jsx';

export const Resultado = () => {
  return (
	<div className="container">
		<h1>Endereço Encontrado</h1>
		{listaEndereco()}
		
	</div>
  )
};

