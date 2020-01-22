

export default function reducer(state:any,action:any){
  console.log('%c Action Type ', 'background: #222; color: #bada55',action.type,action.payload);
  switch (action.type) {
    case Types.SET_USER:
      return{
        ...state,
        user:action.payload
      }
    default:
      console.log(`Action ${action.type} is not registered`);
      return state;
  }
}


export const Types = {
  SET_USER:'SET_USER'
}