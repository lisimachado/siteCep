import { listaEndereco } from '/src/components/Lista/Lista.jsx';
import "./styleResultado.css";

export const Resultado = () => {
	return (
		<div className="containerResultado">
			<h3 className='mb-5'>Endereço Encontrado:</h3>
			{listaEndereco()}
		</div>
	)
};

