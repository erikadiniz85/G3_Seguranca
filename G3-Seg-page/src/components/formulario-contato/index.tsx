import { FormularioStyles } from "./styled.js";
import { useForm } from "react-hook-form";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { ErrorMessage } from "@hookform/error-message";

function Formulario() {
  useEffect(() => {
    console.log("App Input Renderização");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");
  

  function sendEmail(e) {
    // e.preDefault();

    if (
      name === "" ||
      telefone === "" ||
      email === "" ||
      assunto === "" ||
      mensagem === ""
    ) {
      Swal.fire({
        title: "Error!",
        text: "Tente novamente",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else {
      Swal.fire({
        title: "Sucesso!",
        text: "Formulário Enviado",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }

    // const templateParams = {
    //   from_name: name, //o parâmetro name vem do useState, assim como os outros
    //   email: email,
    //   assunto: assunto,
    //   mensagem: mensagem,
    // };

    // emailjs
    //   .send(
    //     "service_pn4iabi",
    //     "template_91r73wd",
    //     templateParams,
    //     "uOvlEavhAQZ_qbF0O"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("Email enviado", response.status, response.text);
    //       setName("");
    //       setTelefone("");
    //       setEmail("");
    //       setAssunto("");
    //       setMensagem("");
    //     },
    //     (error) => {
    //       console.log("Erro:", error.status, error.text);
    //     }
    //   );

    }
    
  return (
    <>
      <FormularioStyles>
        <div className="container" onSubmit={sendEmail}>
          <form className="form">


            <label className="label_form_contato">Seu nome</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder=" "
              required
            />


            <label className="label_form_contato">Telefone com DDD</label>
            <input
              className="input"
              type="tel"
              onChange={(e) => setTelefone(e.target.value)}
              value={telefone}
              placeholder=" "
              required
            />


            <label className="label_form_contato">Email</label>
            <input
              className="input"
              type="email"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
              placeholder=" "
              // required
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
            />
            {errors.email && errors.email.message}
            {/* {errors?.email?.type === "validate" && (
              <p className="error-message">Email Inválido</p>
            )} */}


            <label className="label_form_contato">Assunto</label>
            <input
              className="input"
              type="text"
              onChange={(e) => setAssunto(e.target.value)}
              value={assunto}
              placeholder=" "
              required
            />


            <label className="label_txt">Mensagem</label>
            <textarea
              className="textarea"
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
              placeholder=" "
              required
            />
          </form>

          <button
            id="submit"
            className="btn_enviar"
            type="submit"
            value="Enviar"
            onClick={() => handleSubmit(sendEmail)()}
          >
            ENVIAR MENSAGEM
          </button>
        </div>
      </FormularioStyles>
    </>
  );
}

export default Formulario;
