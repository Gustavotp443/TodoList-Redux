import {configureStore} from "@reduxjs/toolkit";
import { todoReducer } from "../reducer/todoSlice";


export const store = configureStore({
  reducer:{
    todo:todoReducer,
  }
});

type GetStateType = typeof store.getState //Recebe o tipo de store.getState

export type RootState = ReturnType<GetStateType>    //Tipo vai ser de Retorno,
