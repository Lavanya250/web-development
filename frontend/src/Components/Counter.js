import { decrement, increment } from "../Redux/Action"
import {useDispatch,useSelector} from "react-redux";


export const Counter=()=>{
    const dispatch =useDispatch();
    const count=useSelector((state)=>state.count);//use selector to get changes from store apply to the specific components
return(
    <div style={{margin:"20px"}}>
    <h1>Count:{count}</h1>
    <hr width="25%" align="left"/>
    <button> onClick={()=>dispatch(increment())}Increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
);
};