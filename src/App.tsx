import Button from "./components/Button";
import Input from "./components/Input";
import GlobalStyles from "./styles/globalStyles";
import * as S from "./styles/app.styles";
import Item from "./components/Item";
import {useState} from "react";
import {  useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { useAppSelector } from "./redux/hooks";



function App() {

  const todoList = useAppSelector((state:RootState) => state.todo.list);
  const dispatch = useDispatch();

  const [inputData, setInputData]= useState("");


  return (
    <div>
      <GlobalStyles/>
        <S.PageWrapper>
          <S.FormWrapper>
            <Input title="Todo List 😎" text="✍️ Add items "
            value={inputData}
            setValue={setInputData}
            add={dispatch}
            />
            <Item dispatch={dispatch} list={todoList}/>
            <Button dispatch={dispatch} list={todoList}/>
          </S.FormWrapper>
        </S.PageWrapper>
    </div>
  );
}

export default App;
