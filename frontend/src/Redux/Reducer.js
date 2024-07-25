const initialState={//method
     count:0,
};
//state

//reducer pure finction
export const CounterReducer=(state=initialState,action)=>{
     switch(action.key){
        case "INCREMENT"://should match the actions
        //statement
        return {
        count:state.count+1,
        };
        case "DECREMENT"://key=actions
        return{
         count:state.count-1,
        };
        default:
            return state;
     }
};