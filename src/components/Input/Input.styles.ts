import styled from "styled-components";

export const InputWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    >div{
      display: flex;
      align-items: center;
    }
`;

export const TextField= styled.input`
    width: 300px;
    padding: 5px 10px;
    font-size: 16px;
    color: black;
    border-radius: 5px;
    border: 1px solid black;
    padding-inline-end: 30px;
`;

export const TitleField= styled.h1`
    font-size: 24px;
`;

export const AddButton= styled.i`
    position: absolute;
    cursor: pointer;
    left: -30px;
    font-size: 18px;
`;

export const AddButtonPos= styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
