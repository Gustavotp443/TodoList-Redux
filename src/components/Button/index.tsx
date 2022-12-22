import { checkList, deleteAll } from "../../redux/reducer/todoSlice";
import { ItemType } from "../Item";
import * as S from "./Button.styles";
import {useEffect, useState} from "react";

const Button = (props:ItemType) => {


  function handleCheckClick(){
    props.list.map((item)=>{
      item.completed &&  props.dispatch(checkList(item.id));
    });
  }

  function handleDeleteClick(){
    props.dispatch(deleteAll());

  }

  return (
    <S.ButtonWrapper>
      <S.ButtonField onClick={handleCheckClick}>Check List</S.ButtonField>
      <S.ButtonField onClick={handleDeleteClick}>Clear List</S.ButtonField>
    </S.ButtonWrapper>
  );
};

export default Button;
