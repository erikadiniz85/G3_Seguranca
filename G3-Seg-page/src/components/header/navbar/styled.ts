import styled from "styled-components";

export const NavbarStyle = styled.div`
    .navbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        padding-top: 1rem;
    }

    @media only screen and (max-width: 1023px) {
        .navbar {
            width: 50%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .logo-header {
            margin-bottom: 1rem;
        }
    }
    
`