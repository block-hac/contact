import {
    GET_USERS, 
    REGISTER_USER, 
    UPDATE_USER, 
    REMOVE_USER,
    ERROR
} from '../constant/action';
import axios from 'axios';
import config from '../constant/config';

export const getUsers = () => dispatch => {
    axios.get(config.server_url + '/api/get_users')
        .then((res) => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: ERROR,
                payload: 'Network Error !'
            });
        })
}

export const registerUser = (user) => dispatch => {
    axios.post(config.server_url + '/api/register_user', user)
        .then(res => {
            return res.data;
        })
        .then(resJson => {
            dispatch({
                type: REGISTER_USER,
                payload: resJson.msg
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: ERROR,
                payload: 'Register failure !'
            })
        })
}

export const updateUser = (user) => dispatch => {
    axios.post(config.server_url + '/api/update_user', user)
        .then(res => {
            return res.data;
        })
        .then(resJson => {
            dispatch({
                type: UPDATE_USER,
                payload: user
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: ERROR,
                payload: 'Update failure !'
            })
        });
}

export const removeUser = (user) => dispatch => {
    axios.post(config.server_url + '/api/remove_user', user)
        .then(res => {
            return res.data;
        })
        .then(resJson => {
            dispatch({
                type: REMOVE_USER,
                payload: user
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: ERROR,
                payload: 'Remove failure !'
            });
        })
}