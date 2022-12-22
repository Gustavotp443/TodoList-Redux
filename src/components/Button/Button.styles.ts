import styled from "styled-components";

export const ButtonField= styled.button`
    width: 100px;
    height: 30px;
    cursor: pointer;
    background-color: green;
    color: white;
    border: none;

    &:hover{
      background-color: darkgreen;
    }

    &:nth-child(2){
      background-color: red;
    }

    &:nth-child(2):hover{
      background-color: darkred;
    }
`;

export const ButtonWrapper= styled.div`
  display: flex;
  gap: 20px;
`;
