import {IInitialState} from './Store'


export default function reducer(state:IInitialState,action:any){
  console.log('%c Action Type ', 'background: #222; color: #bada55',action.type,action.payload);
  switch (action.type) {
    case Types.SET_USER:
      return{
        ...state,
        user:action.payload
      }
    case Types.ADD_MESSAGE:
      const newState = Object.assign({},state);
      newState.messages.unshift(action.payload)
      return newState
    default:
      console.log(`Action ${action.type} is not registered`);
      return state;
  }
}


export const Types = {
  SET_USER:'SET_USER',
  ADD_MESSAGE:'ADD_MESSAGE',
}