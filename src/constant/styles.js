import {Dimensions, StyleSheet} from 'react-native';
const win = Dimensions.get('window')
export default styles = StyleSheet.create({
    main:{
        flex: 1,
        width: win.width * 0.9,
        alignItems: 'center',
        marginHorizontal: win.width * 0.05
    },
    titleArea: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    titleArea_1: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow'
    },
    contentArea: {
        flex: 3,
        width: '100%',
        paddingTop: '15%'
    },
    title:{
        fontSize: 48,
        marginTop: 20,
        fontFamily: 'Georgia',
        bottom: 0,
    },
    contactItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#666',
        paddingVertical: 20
    },
    roundedBtn: {
        backgroundColor: 'purple',
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    roundedBtn_1: {
        backgroundColor: 'purple',
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        right: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 20,
        padding: '5%',
        marginBottom: '10%',
        fontSize: 18
    },
    dropDown: {
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 20,
        height: 60,
        padding: 10,
        marginBottom: '10%',
        fontSize: 18
    },
    regBtn: {
        backgroundColor: 'purple',
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 20
    },
    opBtn: {
        marginHorizontal: 10
    }
});