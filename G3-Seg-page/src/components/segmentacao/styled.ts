import styled from "styled-components";

export const SegmentacaoStyles = styled.div`
  .container {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    padding: 3rem 9rem;
  }

  .segmentacao-div {
    width: 50%;
    height: auto;
    color: #f9b32a;
    display: flex;
    flex-direction: column;
  }

  .segmentacao-div-2 {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .segmentacao-title {
    width: 70%;
    color: #f9b32a;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .segmentacao-p {
    width: 70%;
    color: #f9b32a;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
  }

  .segmentacao-card-wrapper {
    width: 80%;
    height: auto;
  }

  .btn-projeto {
    margin-bottom: 1rem;
  }


  /* Mobile */
  @media (min-width: 320px) and (max-width: 767px) {
    .container {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
  }

  .segmentacao-div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .segmentacao-div-2 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .segmentacao-title {
    width: 90%;
    font-size: 18px;
  }

  .segmentacao-p {
    width: 90%;
    font-size: 14px;
    margin-top: 1rem;
  }

  .segmentacao-card-wrapper {
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    .container {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    padding: 3rem 3rem;
  }

  .segmentacao-div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .segmentacao-div-2 {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .segmentacao-title {
    width: 100%;
    font-size: 20px;
  }

  .segmentacao-p {
    width: 100%;
    font-size: 14px;
    margin-top: 1rem;
  }

  .segmentacao-card-wrapper {
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }

  .btn-projeto {
    margin-bottom: 1rem;
  }
  }

  /* Desktop */
  @media (min-width: 1025px) {
    .container {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      padding: 3rem 9rem;
    }

  .segmentacao-div {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .segmentacao-div-2 {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .segmentacao-card-wrapper {
    width: 100%;
    height: auto;
    
  }
      
  }
`;
