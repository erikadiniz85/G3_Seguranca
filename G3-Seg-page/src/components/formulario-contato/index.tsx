import { FormularioStyles } from "./styled.js";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Formulario = () => {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    // mostrarAlerta();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const templateParams = {
    from_name: name,
    telefone: telefone,
    email: email,
    assunto: assunto,
    mensagem: mensagem,
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gjpdrm7",
        "template_kujno7j",
        e.target,
        "5FthOE8erNPa9B57u"
      )

      .then( (required) => {
        console.log("SUCCESS!", required.status, required.text);
        setName("");
        setTelefone("");
        setEmail("");
        setAssunto("");
        setMensagem("");
      })

    const required = true;
    if (required) {
      Swal.fire({
        title: "Formulário Enviado!",
        icon: "success",
        confirmButtonText: "Fechar",
      });
      
    } else {
      Swal.fire({
        title: "Error!",
        text: "Tente de novo",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    // const required = true;

    // .then((required) => {
    //   if (required) {
    //     Swal.fire("Enviado!", "Formulário enviado", "success");
    //   } else {
    //     // Swal.fire("Cancelled", "Your imaginary file is safe :)", "error")
    //   }
    // });
  }

  console.log("RENDER");

  return (
    <>
      <FormularioStyles>
        <form className="form_area" onSubmit={sendEmail}>
          <div className="form">
            <input
              className={errors?.name && "input-error"}
              type="text"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p className="error-message">Campo obrigatório!</p>
            )}
            <label className="label_form_contato">Seu nome</label>
          </div>

          <div className="form">
            <input
              className={errors?.telefone && "input-error"}
              type="number"
              {...register("telefone", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors?.telefone?.type === "required" && (
              <p className="error-message">Campo obrigatório!</p>
            )}
            <label className="label_form_contato">Telefone</label>
          </div>

          <div className="form">
            <input
              className={errors?.email && "input-error"}
              type="email"
              {...register("email", {
                required: true,
                validate: (value) => isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && (
              <p className="error-message">Campo obrigatório!</p>
            )}

            {errors?.email?.type === "validate" && (
              <p className="error-message">Email inválido.</p>
            )}
            <label className="label_form_contato">E-mail</label>
          </div>

          <div className="form">
            <input
              className={errors?.assunto && "input-error"}
              type="text"
              {...register("assunto", { required: true })}
            />
            {errors?.assunto?.type === "required" && (
              <p className="error-message">Campo obrigatório!</p>
            )}
            <label className="label_form_contato">Assunto</label>
          </div>

          <div className="text_msg_form">
            <input
              className={errors?.mensagem && "input-error"}
              {...register("mensagem", {
                required: true,
                max: 500,
                min: 3,
                maxLength: 500,
              })}
            />
            {errors?.mensagem?.type === "required" && (
              <p className="error-message">Campo obrigatório!</p>
            )}
            <label className="label_form_contato">Mensagem</label>
          </div>

          <button
            className="btn_enviar"
            type="submit"
            onClick={() => handleSubmit(sendEmail)()}
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </FormularioStyles>
    </>
  );
};

export default Formulario;
