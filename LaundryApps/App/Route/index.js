import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Detail from '../Pages/Detail/index';


const Stack = createStackNavigator();

const App = () => {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Detail" >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerLeft: null,
                            headerTitle: 'Home',
                            headerStyle: {
                                backgroundColor: '#D7AF70',
                            },
                            headerTintColor: '#FFF'
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: null }}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{ headerShown: null }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;