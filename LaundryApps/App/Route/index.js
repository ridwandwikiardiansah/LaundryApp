import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Detail from '../Pages/Detail/index';
import Product from '../Pages/Product';
import Summary from '../Pages/Summary';
import Color from '../Constant/Color';

const Stack = createStackNavigator();

const App = () => {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: null }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: null }}
                    />
                    <Stack.Screen
                        name="Product"
                        component={Product}
                        options={{ headerShown: null }}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{ headerShown: null }}
                    />
                    <Stack.Screen
                        name="Summary"
                        component={Summary}
                        options={{
                            headerTintColor: Color.Main,
                            title: 'Order Summary',
                            headerTitleAlign: 'center'
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;