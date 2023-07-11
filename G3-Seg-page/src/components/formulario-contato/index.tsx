import React, { useState } from 'react';

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Seu nome
        <input
          type="text"
          name="nome"
          value={formulario.nome}
          onChange={handleChange}
        />
      </label>

      <label>
        Telefone
        <input
          type="number"
          name="telefone"
          value={formulario.telefone}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Assunto
        <input
          type="text"
          name="assunto"
          value={formulario.assunto}
          onChange={handleChange}
        />
      </label>

      <label>
        Mensagem
        <input
          type="text"
          name="mensagem"
          value={formulario.mensagem}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Enviar mensagem</button>
    </form>
  );
};

export default Formulario;
