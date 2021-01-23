import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constant/styles';
import {useDispatch} from 'react-redux';
import {getUsers, updateUser} from '../action/common';
import DropDownPicker from 'react-native-dropdown-picker';
const EditScreen = (props) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(props.route.params.user.name);
    const [phone_number, setPhone] = useState(props.route.params.user.phone_number);
    const [city, setCity]= useState(props.route.params.user.city);
    const get_users = () => {
        dispatch(getUsers());
    }
    const update_user = (userData) => {
        dispatch(updateUser(userData));
        setTimeout(() => {
            get_users();
            props.navigation.navigate('Dashboard');
        }, 1000);
    }
    useEffect(() => {
    }, [])
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.titleArea}>
                <Text style={{ fontSize: 24, marginTop: '20%'}}>Edit Contact</Text>
                <TouchableOpacity style={{marginTop: '20%'}} onPress={() => {
                    props.navigation.navigate('Dashboard');
                }} >
                    <Icon name = 'chevron-back-outline' size={16} color={'purple'}><Text>back to main</Text></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.contentArea}>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Name'
                    onChangeText={e => {setName(e)}}
                    value={name}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Phone number'
                    onChangeText={e => {setPhone(e)}}
                    value={phone_number}
                />
                <DropDownPicker
                    items={[
                        {label: 'USA', value: 'usa', icon: () => <Icon name="flag-outline" size={18} color="#900" />, hidden: true},
                        {label: 'UK', value: 'uk', icon: () => <Icon name="flag-outline" size={18} color="#900" />},
                        {label: 'France', value: 'france', icon: () => <Icon name="flag-outline" size={18} color="#900" />},
                    ]}
                    searchable = {true}
                    defaultValue = {props.route.params.user.city}
                    containerStyle = {styles.dropDown}
                    placeholderStyle = {{ color: '#666' }}
                    placeholder = "City"
                    selectedLabelStyle={{color: '#333'}}
                    style = {{backgroundColor: 'transparent', borderWidth: 0}}
                    itemStyle = {{ justifyContent: 'flex-start' }}
                    dropDownStyle = {{backgroundColor: '#fafafa' }}
                    controller = {instance => controller = instance}
                    onChangeItem = {(item) => setCity(item.value)}
                />
                <TouchableOpacity 
                    style={styles.regBtn}
                    onPress={() => {update_user({id:props.route.params.user.id, name: name, phone_number: phone_number, city: city})}}
                >
                    <Text style={{fontSize: 22, color: 'white'}}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default EditScreen;