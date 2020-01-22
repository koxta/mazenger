import { Types } from "../Store/Reducer";

export default class Message{
  message: string;
  timeStamp: number;
  uid: string;
  userName: string;
}

export function addMessage(dispatch, message: Message){
  dispatch({
    type: Types.ADD_MESSAGE,
    payload: message,
  })
}