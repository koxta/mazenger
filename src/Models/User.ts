import {Types} from '../Store/Reducer'

export default class User{
  userName: string;
  uid: string;
}

export function setUser(dispatch, user: User){
  dispatch({
    type: Types.SET_USER,
    payload: user,
  })
}