import React, { useReducer } from "react";
import { todoReducer } from "./reducer";
import { initialState } from "./state";
import { TodoContext } from "./context";

interface Props {
  children: React.ReactNode;
}
export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )

}