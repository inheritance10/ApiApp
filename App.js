import React, {Component} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Details from "./src/components/details/Details";
import List from "./src/components/lists/List";

const Stack = createStackNavigator();

export default class App extends Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Data List' component={List} />
                    <Stack.Screen name="Detail Page" component={Details} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
