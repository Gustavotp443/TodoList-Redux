import * as S from "./item.styles";
import {FaTrashAlt} from "react-icons/fa";
import {GiConfirmed} from "react-icons/gi";
import {RiCloseCircleLine} from "react-icons/ri";
import { deleteItem, setCompleted } from "../../redux/reducer/todoSlice";

export type ItemType={
    list: any[],
    dispatch:any
}

const Item = (props:ItemType) => {



  function handleDeleteClick(id:any){
    props.dispatch(deleteItem(id));
  }



  return (
    <>
      {props.list.map((item)=>{



      function handleAcceptClick(){
        props.dispatch(setCompleted({item:item, list:props.list}));
      }

      return (
        <S.ItemWrapper key={item.id}>
          <S.ItemBox confirmed={item.completed}>{item.data}</S.ItemBox>
          <S.IconWrapper>
            <S.AcceptIcon onClick={handleAcceptClick} confirmed={item.completed}>{item.completed ? <RiCloseCircleLine/> : <GiConfirmed/>}</S.AcceptIcon>
            <S.TrashIcon onClick={()=>handleDeleteClick(item.id)}><FaTrashAlt/></S.TrashIcon>
          </S.IconWrapper>
        </S.ItemWrapper>
      );
      })}
    </>
  );
};

export default Item;
