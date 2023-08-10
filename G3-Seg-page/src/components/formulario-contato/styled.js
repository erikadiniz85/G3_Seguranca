import styled from "styled-components";

export const FormularioStyles = styled.div`
  .form_area {
    color: #262626;
    

  }

  .form {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .form input {
    width: 29.6rem;
    height: 2.8rem;
    padding-left: 1rem;
    outline: 0;
    border: 0.5px solid #ddd;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 0px #fd7a1e;
    background: #ffffff;
    font-size: 14px;
    margin-bottom: 0.75rem;
  }

  .form label {
    font-size: 14px;
    margin-left: 1rem;
    color: #262626;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3125rem;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 12px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-in-out;
  }

  .form:focus-within label {
    transform: translate(0, 1px) scale(0.75);
    color: #999;
  }

  .form .Active {
  transform: translate(0, 12px) scale(0.75);
    }

  .text_msg_form {
    display: flex;
    flex-direction: column;
    min-width: 350px;
    position: relative;
  }

  .text_msg_form input {
    width: 100%;
    height: 56px;
    padding: 14px 16px 0 10px;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  .text_msg_form label {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 12px;
    color: #999;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 26px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }

  .text_msg_form:focus-within label {
    transform: translate(0, 12px) scale(0.75);
  }

  .btn_enviar {
    background-color: #fd7a1e;
    padding: 0.75rem 1rem;
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.875rem; /* 187.5% */
    margin-top: 0.75rem;
  }
`;
