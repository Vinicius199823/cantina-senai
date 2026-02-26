import React, {useContext} from "react";
import { NavigationContainer }  from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"; 

import { AuthContext } from '../context/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/Checkout';


export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Detail: {productId: string};
    Cart: undefined;
    Checkout: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    const {isLogged} = useContext(AuthContext);

    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                {!isLogged ? (
                    <Stack.Screen name="Login" component={LoginScreen}>

                    </Stack.Screen>
                    ) : 
                    (
                        <>
                            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                            <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
                            <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
                            <Stack.Screen name="Checkout" component={CheckoutScreen}></Stack.Screen>
                        </>
                    )
                
                }
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}