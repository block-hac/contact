import React, {useState, useEffect} from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../constant/styles';
import ContactItem from '../component/contact_item';
import {getUsers} from '../action/common';
import {useSelector, useDispatch} from 'react-redux';

const DashboardScreen = (props) => {
    const {users} = useSelector((state) => state.user);
    const {isError, err_msg} = useSelector((state) => state.error);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.titleArea}>
                <Text style={{fontSize: 20, marginTop: '5%'}}>TEST</Text>
                <Text style={styles.title}>collection</Text>
                <View style={{width: '100%', bottom: 0, position: 'absolute'}}>
                    <Text style={{ color: '#666', fontSize: 20 }}>Contacts</Text>
                </View>
            </View>
            <View style={styles.contentArea}>
                <FlatList
                    data={users}
                    renderItem={(item) => {
                        return (
                            <ContactItem navigation={props.navigation}  user={item} />
                        );
                    }}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
                <TouchableOpacity style={styles.roundedBtn} onPress={() => {
                    props.navigation.navigate('Register');
                }}>
                    <Icon name="md-add" size={24} color={'white'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default DashboardScreen;