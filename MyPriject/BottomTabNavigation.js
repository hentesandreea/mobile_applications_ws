import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";


const Tab = createBottomTabNavigator()
function BottomTabNavigation(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Jobs"} component={Home} options={{headerShown:false}}/>
            <Tab.Screen name={"Profile"} component={Profile} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;