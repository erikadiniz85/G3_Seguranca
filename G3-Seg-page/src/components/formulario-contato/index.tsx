import { FormularioStyles } from "./styled.js";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    alert(JSON.stringify(data));
  };

  console.log("RENDER");

  return (
    <>
      <FormularioStyles>
        <form className="form_area">

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
              type="telefone"
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
            onClick={() => handleSubmit(onSubmit)()}
          >
            ENVIAR MENSAGEM
          </button>
        </form>
      </FormularioStyles>
    </>
  );
};

export default Formulario;
