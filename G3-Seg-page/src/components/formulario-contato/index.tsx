import { FormularioStyles } from "./styled.js";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";


interface IFormInputs {
  name: string;
  telefone: number;
  email: string;
  assunto: string;
  mensagem: string;
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

function Formulario() {
  useEffect(() => {
    console.log("App Input Renderização");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function sendEmail(e) {
    // e.preDefault();

    const required = false;
    
    if (
      name === "" ||
      telefone === "" ||
      email === "" ||
      assunto === "" ||
      mensagem === "" ||
      required
      
    ) { 
      Swal.fire({
        title: "Sucesso!",
        text: "Formulário Enviado",
        icon: "success",
        confirmButtonText: "Ok",
      });
      
    } else {
      setName("");
      setTelefone("");
      setEmail("");
      setAssunto("");
      setMensagem("");

      Swal.fire({
        title: "Error!",
        text: "Preencha os campos e tente novamente",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
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
        <div className="container">
          {/* <form className="form" onSubmit={handleSubmit(sendEmail)}> */}
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <label className="label_form_contato">Seu nome</label>

              <input
                className="input"
                type="text"
                placeholder=" "
                required
                {...register("name", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                  pattern: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i,
                })}
              />
              {errors.name && (
                <p className="error-message">Preencha o campo!</p>
              )}
              {/* {errors?.name?.type === "required" && (
                <p className="error-message">Preencha o campo!</p>
              )} */}
            </div>

            <div className="form-input">
              <label className="label_form_contato">Telefone com DDD</label>

              <input
                className="input"
                type="tel"
                placeholder=" "
                required
                {...register("telefone", {
                  required: true,
                  pattern: {
                    value: /^[0-9]{2}\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
                    message: "Telefone inválido",
                  },
                })}
              />
              {errors.telefone && (
                <p className="error-message">Preencha o campo!</p>
              )}
              {/* {errors?.telefone?.type === "required" && (
                <p className="error-message">Preencha o campo!</p>
              )} */}
            </div>

            <div className="form-input">
              <label className="label_form_contato">Email</label>

              <input
                className="input"
                type="email"
                placeholder=" "
                required
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">Preencha o campo!</p>
              )}
              {/* {errors?.email?.type === "required" && (
                <p className="error-message">Preencha o campo!</p>
              )} */}
            </div>

            <div className="form-input">
              <label className="label_form_contato">Assunto</label>

              <input
                className="input"
                type="text"
                placeholder=" "
                required
                {...register("assunto", {
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                  
                  pattern: {
                    value: /^[a-zA-Z0-9_ ]+$/i,
                    message: "Campo necessário"
                  },
                })}
              />
              {errors.assunto && (
                <p className="error-message">Preencha o campo!</p>
              )}
              {/* {errors?.assunto?.type === "required" && (
                <p className="error-message">Preencha o campo!</p>
              )} */}
            </div>

            <div className="form-input">
              <label className="label_txt">Mensagem</label>
              <textarea
                className="textarea"
                placeholder=" "
                required
                {...register("mensagem", {
                  required: true,
                  minLength: 5,
                  maxLength: 300,
                  pattern: {
                    value: /\w/i,
                    message: "Campo necessário"
                  },
                })}
              />
              {errors.mensagem && (
                <p className="error-message">Preencha o campo!</p>
              )}
              {/* {errors?.mensagem?.type === "required" && (
                <p className="error-message">Preencha o campo!</p>
              )} */}
            </div>
          </form>

          <button
            id="submit"
            className="btn_enviar"
            type="submit"
            value="Enviar"
            onClick={() => handleSubmit(sendEmail)()}
            // onClick={sendEmail}
          >
            ENVIAR MENSAGEM
          </button>
        </div>
      </FormularioStyles>
    </>
  );
}

export default Formulario;
