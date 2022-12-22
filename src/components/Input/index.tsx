import * as S from "./Input.styles";
import {IoMdAdd} from "react-icons/io";
import { increment } from "../../redux/reducer/todoSlice";

type InputType={
    title:string,
    text:string,
    value:string,
    setValue:any,
    add:any
}

const Input = (props:InputType) => {

  function handleOnChange(e:React.ChangeEvent<HTMLInputElement>){
    props.setValue(e.target.value);
  }

  function addDataOnClick(){
    props.add(increment(props.value));
  }


  return (
    <S.InputWrapper>
        <S.TitleField>{props.title}</S.TitleField>
        <div>
        <S.TextField placeholder={props.text}
        value={props.value}
        onChange={(e) => {handleOnChange(e);}}
        />
        <S.AddButtonPos>
          <S.AddButton onClick={addDataOnClick}><IoMdAdd/></S.AddButton>
        </S.AddButtonPos>
        </div>
    </S.InputWrapper>
  );
};

export default Input;
