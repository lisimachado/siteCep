import React, { useEffect, useState } from 'react';

/*export const Resultado = () => {
  return <h1>Resultado Page</h1>;
};
*/
// Para pegar dados do LocalStorage
export function listaEndereco() {
  const [endereco, setEndereco] = useState([]);

  useEffect(() => {
    const novoEndereco = localStorage.getItem('endereco');
    if (novoEndereco) {
      const parseEndereco = JSON.parse(novoEndereco);
      setEndereco(parseEndereco);
    }
  }, []);

  return (
    <div>
      <h2>Endereço Encontrado</h2>
      <ul>
        {endereco.map((address, index) => (
          <li key={index}>
            <p>CEP: {address.cep}</p>
            <p>Código IBGE: {address.ibge}</p>
            <p>Logradouro: {address.logradouro}</p>
            <p>Complemento: {address.complemento}</p>
            <p>Bairro: {address.bairro}</p>
            <p>Localidade: {address.localidade}</p>
            <p>Estado: {address.uf}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*

import { useEffect, useState } from 'react';

export const Resultado = () => {
  /*return <h1>Resultado Page</h1>;
}
	//Para pegar dados do LocalStorage
  export function buscaEndereco = () => {
    */
   /*
    const [endereco, setEndereco] = useState([]);
  
    useEffect(() => {
      const novoEndereco = localStorage.getItem('endereco');
      if (novoEndereco) {
        const parseEndereco = JSON.parse(novoEndereco);
        setEndereco(parseEndereco);
      }
    }, []);
  
    return (
      <div>
        <h2>Endereço Encontrato</h2>
        <ul>
          {endereco.map((address, index) => (
            <li key={index}>
              <p>CEP: {address.cep}</p>
              <p>Código IBGE: {address.ibge}</p>
              <p>Logradouro: {address.logradouro}</p>
              <p>Complemento: {address.complemento}</p>
              <p>Bairro: {address.bairro} </p>
              <p>Localidade: {address.localidade}</p>
              <p>Estado: {address.uf}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  */