import styled,{createGlobalStyle} from "styled-components";


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,html{
        height: 100%;
    }

`;

export const Section= styled.section`
    max-width: 1280px;
    margin: 0 auto;
`;
