import {
    GET_USERS,
    REGISTER_USER,
    UPDATE_USER,
    REMOVE_USER
} from '../constant/action';

export default function reducer(
    state = {
        users: [],
        status: false,
        msg: ''    
    }, action
) {
    switch (action.type) {
        case GET_USERS: {
            if(action.payload.length !== 0) {
                var users = [];
                action.payload.forEach(e => {
                    users.push(e);
                });
                return {
                    ...state,
                    users: users
                };
            } else {
                return {state};
            }
        }
        case REGISTER_USER: {
            return {
                state
            };
        }
        case UPDATE_USER: {
            return {
                state,
            }
        }
        case REMOVE_USER: {
            return {
                ...state
            };
        }
        default:
            return state;
    }
}