import styled from "styled-components";

export const FormularioStyles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 16px;
    width: 29.6rem;
    height: auto;
  }

  .form {
    margin-bottom: 0.75rem;
    /* position:relative; */
    background-color: transparent;
    width: 29.6rem;
    height: auto;
  }

  .input {
    background-color: #ffffff;
    /* position: relative; */
    height: 2.8rem;
    width: 100%;
    border: 2px solid #262626;
    border-radius: 0.5rem;
    outline: none;
    margin-bottom: 0.75rem;
    /* transition: all 160ms ease-in; */
    padding-left: 1rem;
  }

  .input:hover {
    border-color: #fd7a1e;
  }

  .label_form_contato {
    color: #ffffff;
    /* position: relative; */
    left: 1rem;
    /* bottom: 2.8rem; */
    padding: 0 0.5rem;
    /* transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in; */
    background: transparent;
    cursor: text;
  }

  /* .input:focus ~ 
  .label_form_contato,
  .input:not(:placeholder-shown)
  .input:not(:focus)~ 
  .label_form_contato {
    font-size: 0.8rem;
    top: -5.3rem;
    left: 0.8rem;
    color: #656565;
  } */

  .error-message {
    color: red;
    font-size: 10px;
  }
  .textarea {
    background: #fff;
    /* position: relative; */
    height: 9rem;
    width: 100%;
    border: 2px solid #262626;
    border-radius: 0.5rem;
    outline: none;
    margin-bottom: 0.75rem;
    /* transition: all 160ms ease-in; */
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .textarea:hover {
    border-color: #fd7a1e;
  }

  /* .textarea:focus ~ 
  .label_txt,
  .textarea input:not(:placeholder-shown) 
  .textarea:not(:focus) ~ 
  .label_txt {
    font-size: 0.8rem;
    top: 18.7rem;
    left: 0.8rem;
    color: #656565;
  } */

  .label_txt {
    color: #ffffff;
    /* position: absolute; */
    left: 1rem;
    bottom: 9rem;
    padding: 0 0.5rem;
    /* transition:  top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in; */
    background: transparent;
    cursor: text;
  }

  .btn_enviar {
    background-color: #fd7a1e;
    padding: 0.75rem 1rem;
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.875rem;
  }

  .input:invalid {
    background-color: pink;
  }

  .input:valid {
    background-color: aqua;
  }

  .textarea:invalid {
    background-color: pink;
  }

  .textarea:valid {
    background-color: aqua;
  }
`;
