import React, { useState } from "react";
import { FormularioStyles } from "./styled.js";

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nome: "",
    telefone: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <>
      <FormularioStyles>
        <form className="form_area" onSubmit={handleSubmit}>
          <div className="form">
            <input
              type="text"
              name="nome"
              value={formulario.nome}
              onChange={handleChange}
            />
            <label className="label_form_contato">Seu nome</label>
          </div>

          <div className="form">
            <input
              type="number"
              name="telefone"
              value={formulario.telefone}
              onChange={handleChange}
            />
            <label className="label_form_contato">Telefone</label>
          </div>

          <div className="form">
            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
            />
            <label className="label_form_contato">Email</label>
          </div>

          <div className="form">
            <input
              type="text"
              name="assunto"
              value={formulario.assunto}
              onChange={handleChange}
            />
            <label className="label_form_contato">Assunto</label>
          </div>

          <div className="text_msg_form">
            <textarea
            required
            maxLength={100}
              name="mensagem"
              value={formulario.mensagem}
              onChange={handleChange}
            />
            <label className="label_form_contato">Mensagem</label>
          </div>

          <button className="btn_enviar" type="submit">
            ENVIAR MENSAGEM
          </button>
        </form>
      </FormularioStyles>
    </>
  );
};

export default Formulario;
