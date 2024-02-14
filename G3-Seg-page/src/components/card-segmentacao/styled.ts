import styled from "styled-components";

export const CardSegmentacaoStyles = styled.div`
  .card-segmentacao {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .segmentacao {
    width: 100%;
    background-color: #2c2c2c;
    box-shadow: 0px 0px 12px 0px #ffffff1f;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .svg_segmentacao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1.5rem;
  }

  .txt_segmentacao {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 2rem;
  }

  h4 {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    margin-bottom: 0.75rem;
  }

  li {
    list-style: none;
    color: #ffffff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
  }


  /* Mobile */

  @media (min-width: 320px) and (max-width: 767px) {
    .card-segmentacao {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    
  }

  .segmentacao {
    width: 95%;
    height: auto;
    background-color: #2c2c2c;
    box-shadow: 0px 0px 12px 0px #ffffff1f;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .svg_segmentacao {
    display: none;
  }

  .txt_segmentacao {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 1rem 0.5rem;
    
  }

  h4 {
    color: #f9b32a;
    font-size: 16px;
    margin-bottom: 0.75rem;
  }

  li {
    font-size: 14px;
    
  }
  }
`;
