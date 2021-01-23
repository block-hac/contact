import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constant/styles';
import {getUsers, removeUser} from '../action/common';
import {useDispatch} from 'react-redux';
const ContactItem = (props) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const getUser = () => {
        setUser(props.user.item);
    }
    const get_users = () => {
        dispatch(getUsers());
    }
    const remove_user = (selectedUser) => {
        dispatch(removeUser(selectedUser));
        setTimeout(() => {
            get_users();
        }, 1000);
    }
    useEffect(() => {
        getUser();
    }, [user]);
    return (
        <View style={styles.contactItem}>
            <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
                <Icon name="ios-person" size={24} color={'#666'} />
                <Text style={{fontSize: 20, marginLeft: 20}}>{user.name}</Text>
            </View>
            <View style={{justifyContent: 'flex-end',  flexDirection: 'row'}}>
                <TouchableOpacity style={styles.opBtn} onPress={() => {
                    props.navigation.navigate('Edit', {user: user});
                }}>
                    <Icon name="pencil" size={24} color={'#666'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.opBtn} onPress={() => {
                    remove_user(user);
                }}>
                    <Icon name="trash" size={24} color={'#666'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ContactItem;