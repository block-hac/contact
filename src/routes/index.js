import React, {useEffect} from 'react';
import {Animated, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../screen/dashboard';
import EditScreen from '../screen/edit';
import RegisterScreen from '../screen/register';
const forFade = ({current, next}) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0,
    ).interpolate({
      inputRange: [0, 0, 2],
      outputRange: [0, 10, 0],
    });
    return {
      leftButtonStyle: {opacity},
      rightButtonStyle: {opacity},
      titleStyle: {opacity},
      backgroundStyle: {opacity},
    };
  };

const Stack = createStackNavigator();
function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Dashboard" headerMode={'none'}>
            <Stack.Screen 
                name="Dashboard"
                component={DashboardScreen}
            />
            <Stack.Screen 
                name="Register"
                component={RegisterScreen}
            />
            <Stack.Screen 
                name="Edit"
                component={EditScreen}
            />
        </Stack.Navigator>
    );
}

export default function ContactApp() {
    return (
        <NavigationContainer>
            <StatusBar hidden={false} />
            <RootStack />
        </NavigationContainer>
    );
} 