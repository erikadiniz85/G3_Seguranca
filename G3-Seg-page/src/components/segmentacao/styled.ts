import styled from "styled-components";

export const SegmentacaoStyles = styled.div`
  .container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 6rem;
    padding-bottom: 6rem;
    background-color: #242424;
  }

  .segmentacao-div {
    color: #f9b32a;
    width: 19.25rem;
  }

  .segmentacao-title {
    color: #f9b32a;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .segmentacao-p {
    color: #f9b32a;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1rem;
    width: 14.0625rem;
  }



  @media only screen and (max-width: 1023px) {
    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      padding-left: 6rem;
      padding-top: 3rem;
    }

    .segmentacao-div {
      width: 80%;
      padding-bottom: 3rem;
    }
    
    .segmentacao-p {
      width: 80%;
    }
    .segmentacao-card-wrapper {
      margin-bottom: 1rem;
    }
  }
`;
