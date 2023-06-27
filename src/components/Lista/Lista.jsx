import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const listaEndereco = () => {
  const [endereco, setEndereco] = useState(null);

  useEffect(() => {
    const dadosEndereco = localStorage.getItem('dadosEndereco');
    if (dadosEndereco) {
      const enderecoLocalStorage = JSON.parse(dadosEndereco);
      if (Array.isArray(enderecoLocalStorage) && enderecoLocalStorage.length > 0) {
        setEndereco(enderecoLocalStorage[enderecoLocalStorage.length - 1]);
      }
    }
  }, []);

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);

  }

  if (!endereco) {
    return null; // Caso não haja endereço para exibir
  }



  return (
    <div>
      <p>CEP: {endereco.cep}</p>
      <p>Código IBGE: {endereco.ibge}</p>
      <p>Logradouro: {endereco.logradouro}</p>
      <p>Complemento: {endereco.complemento}</p>
      <p>Bairro: {endereco.bairro}</p>
      <p>Localidade: {endereco.localidade}</p>
      <p>Estado: {endereco.uf}</p>

      <Button
        className="btn-envio"
        variant="secondary"
        type="button"
        id="btn-cadastro"
        onClick={handleVoltar}
        style={{ boxShadow: "2px 2px 4px rgba(70, 68, 68, 0.5)" }}>
        Voltar
      </Button>
    </div>
  );
};
