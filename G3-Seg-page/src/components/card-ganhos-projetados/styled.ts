import styled from "styled-components";

export const CardGanhosProjetadosStyles = styled.div`
  .div_geral {
    width: 100%;
    background: #242424;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .div_quadro_ganhos {
    width: 50%;
    height: auto;
    border-radius: 1rem;
    background: rgba(44, 44, 44, 0.2);
    box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.24);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
  }

  .div_title {
    width: auto;
    color: #f9b32a;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

  .div_title_h3 {
    color: #f9b32a;
    text-align: center;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .div_title_p {
    color: #f9b32a;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    width: 30rem;
    margin-top: 1rem;
  }

  .ganhos_negocio {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .prejuizos_evitados {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .div_ganhos {
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: flex-end;
  }

  .div_img1 {
    width: 40%;
  }

  .div_ganhos_title {
    width: 90%;
    color: #fff;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.875rem;
    display: flex;
    margin-bottom: 0.75rem;
  }


  .div_list_ganhos {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .ganhos_list_left {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .p_ganhos {
    margin-left: 0.3rem;
  }

  .li_left {
    width: 100%;
    display: flex;
    margin-bottom: 0.5rem;
  }

  .li_right {
    display: flex;
    margin-bottom: 0.5rem;
  }

  .ganhos_list_right {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .p_prejuizos {
    margin-left: 0.3rem;
  }

  .div_img2 {
    margin-right: 3.75rem;
  }

  .div_ganhos > .btn_ganhos_proj{
      margin-top: 3rem;
    }

  // Mobile

  @media (min-width: 320px) and (max-width: 767px) {
    .div_geral {
      width: 100%;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    .div_quadro_ganhos {
      width: 70%;
      padding: 1.5rem;
      display: flex;
    }

    .div_title {
      width: 100%;
    }

    .div_title_h3 {
      font-size: 22px;
      width: 100%;
    }

    .div_title_p {
      font-size: 12px;
      width: 100%;
    }

    .div_list_ganhos {
      display: flex;
      flex-direction: column;
    }

    .div_ganhos_title {
      width: 100%;
      font-size: 18px;
    }

    .imagem_1 {
      display: none;
    }

    .prejuizos_evitados {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
    }

    .imagem_2 {
      display: none;
    }

    .div_ganhos {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .btn_ganhos_proj{
      margin-top: 2rem;
      width: auto;
    }



    
  }
`;
