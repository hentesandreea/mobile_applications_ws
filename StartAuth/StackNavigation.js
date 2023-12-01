import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/Register";
import LogIn from "./screens/LogIn";

const Stack = createNativeStackNavigator()
function StackNavigation (props){
    return(
        <Stack.Navigator>
            <Stack.Screen name={"Register"} component={Register} options={{headerShown:false}}/>
            <Stack.Screen name={"LogIn"} component={LogIn} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default StackNavigation;