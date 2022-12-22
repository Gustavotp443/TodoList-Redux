import { createSlice, current } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";



export type todoIncrementType={
  id:string,
  data:string,
  completed:boolean
}

export type ListData={
  list:todoIncrementType[],
}

const initialState:ListData={
  list:[],
};


export const todoSlice= createSlice({

  name:"todo",
  initialState,
  reducers:{
    increment:(state:ListData, action:PayloadAction<string>)=>{
      const newTodo={
        id:new Date().getTime().toString(),
        data:action.payload,
        completed:false
      };
      state.list.push(newTodo);
    },

    deleteItem:(state:ListData, action: PayloadAction<any>)=>{
      state.list.splice(state.list.map((i:any)=> i.id).indexOf(action.payload) , 1);
    },

    setCompleted: (state:ListData, action: PayloadAction<any>)=>{
      const {id, data,completed}= action.payload.item;
      const newTodo={
        id:id,
        data:data,
        completed:!completed
      };
      state.list.splice(action.payload.list.map((i:any)=> i.id).indexOf(id), 1,
        newTodo
      );
    },
    checkList:(state:ListData,action:PayloadAction<string>)=>{
        state.list.splice(state.list.map((i:any) => i.id).indexOf(action.payload) , 1);
    },

    deleteAll:(state:ListData)=>{
      while(state.list.length){
        state.list.pop();
      }
    }


  }
});


export const {increment , deleteItem, setCompleted, checkList, deleteAll} = todoSlice.actions; //Action, valores enviados pelo Dispatch(event listener)
export const todoReducer = todoSlice.reducer;   //Função para usar dentro da store


