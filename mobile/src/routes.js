import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: '#7D40E7',
                    },
                }}
            >
                <Stack.Screen name="Main" options={{title: 'DevRadar'}} component={Main} />
                <Stack.Screen name="Profile" options={{title: 'Perfil no Github'}} component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;