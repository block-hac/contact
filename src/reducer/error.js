import {ERROR} from '../constant/action';
export default function reducer(
    state = {
        isError: false,
        err_msg: ''
    }, action
){
    switch(action.type) {
        case ERROR:{
            return {
                ...state,
                isError: true,
                err_msg: action.payload
            };
        }
        default:
            return state;
    }
}