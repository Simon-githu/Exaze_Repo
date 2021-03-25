import {Set_User_Name} from './actionsTypes'

// This is an action funtion which accepts a string and returns an action when its called
export function setUserName(userName){
    return{
    type:Set_User_Name,
    userName
    }
}
