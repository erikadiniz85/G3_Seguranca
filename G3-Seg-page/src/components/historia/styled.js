import styled from "styled-components";
import backgroundHistoria from "../../assets/img/background-historia.svg";

export const HistoriaG3Styled = styled.div`
    .historia {
        background-image: url(${backgroundHistoria});
        /* opacity 0.09; */
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: space-around;

    }
    
    .historia-wrapper {
        width: 50.375rem;
        height: auto;
        color: #F9B32A;
        display: flex;
        flex-direction: column;
        padding-top: 6rem;
    }

    .img-hist-wrapper{
       width: 19.25rem;
       margin-top: 3rem;
    }

    
`