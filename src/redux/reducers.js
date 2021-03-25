import {Set_User_Name} from './actionsTypes';

const initialState={
    userName:null,
};
// This is a receiver of an action and its called reducer whenever an action is called it will come to reducer and reducer will calculate the 
// data and save the data in the state
export const reducer=(state=initialState,action)=>{
   switch (action.type) {
       case Set_User_Name:
           return{
            ...state,
               userName:action.userName
           }
           
   
       default:
           state;
   }
}