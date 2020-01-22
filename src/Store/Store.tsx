import React, { createContext, useReducer } from 'react';

import reducer from './Reducer'
import { User, Message } from '../Models';

interface IInitialState{
  user:User;
  messages:Array<Message>;
}

interface IContextProps{
  state:IInitialState;
  dispatch:Function;
}

export const Store = createContext({} as IContextProps);

const InitialState = {
  user:new User(),
  messages:[],
}

export const StoreProvider = (props:any) => {
  const [state,dispatch] = useReducer(reducer,InitialState)
  const value = {state,dispatch};
  return(
    <Store.Provider value={value}>{props.children}</Store.Provider>
  )
}