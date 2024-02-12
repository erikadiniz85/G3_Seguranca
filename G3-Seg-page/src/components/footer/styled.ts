import styled from "styled-components";

export const FooterStyled = styled.div`
    .footer {
        background-color: #2C2C2C;
        width: 100%;
        height: auto;
        color: #FFFFFF;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 1.88rem;
        padding-bottom: 1.87rem;
        
    };

    .logo-footer {
        width: 6.813rem;
        height: 2.375rem;
        
    }


   .footer-contact {
    display: flex;
    text-decoration: none;
    color: #FFFFFF;
    font-size: 12px;
    font-weight:500;
    line-height: 21px;
    
   }

.frase-1 {
    font-size: 12px;
    font-weight:500;
    line-height: 21px;
}

@media (min-width: 320px) and (max-width: 767px) {
    .footer {
        width: 100%;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       justify-content: center;
       
    }
  
    .logo-footer {
        margin: 0 1rem;
        
    }

    .frase-1{
        margin-top: 1rem;
    }
}
`;

