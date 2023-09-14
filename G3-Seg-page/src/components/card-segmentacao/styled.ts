import styled from "styled-components";

export const CardSegmentacaoStyles = styled.div`
  .card-segmentacao {
    display: flex;
    flex-direction: column;
    width: auto;
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
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 2rem;
  }

  h4 {
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    margin-bottom: 0.75rem;
  }

  li {
    list-style: none;
    color: #ffffff;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem;
  }
`;
