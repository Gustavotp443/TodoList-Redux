import styled from "styled-components";

type confirmedType={
  confirmed:boolean
}


export const ItemBox= styled.div<confirmedType>`
  width: 300px;
  height: 40px;
  padding: 10px;
  background-color: ${(props)=> props.confirmed ? "green" : "purple"};
  color: white;
  border-radius: 5px;
  overflow-x:auto;
  padding-inline-end: 40px;

`;

export const ItemWrapper= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AcceptIcon=styled.i<confirmedType>`
  position: absolute;
  left: -60px;
  z-index: 2;
  cursor: pointer;
  font-size:  ${(props) => props.confirmed ? "20px" : "18px"};

  svg{
    color: ${(props) => props.confirmed ? "red" : "green"};
    background-color: ${(props) => props.confirmed ? "green" : "purple"};
  }

`;

export const TrashIcon= styled.i`
  position: absolute;
  left: -30px;
  cursor: pointer;
  z-index: 2;

  svg{
    color: white;
    background-color: purple;
  }
`;

export const IconWrapper= styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

`;
