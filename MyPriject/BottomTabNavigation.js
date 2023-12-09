import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import {Ionicons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator()

function BottomTabNavigation(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Jobs"} component={Home} options={{
                tabBarIcon: ({focused}) => <Ionicons name={'home'} size={24} color={focused ? "purple" : "gray"}/>
            }}/>
            <Tab.Screen name={"Profile"} component={Profile} options={{
                tabBarIcon: ({focused}) => <Ionicons name={'person'} size={24} color={focused ? "purple" : "gray"}
                />
            }}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;