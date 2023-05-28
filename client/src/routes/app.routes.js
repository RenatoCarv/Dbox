import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Create } from '../pages/Create';

const Stack = createNativeStackNavigator();


export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>

                <Stack.Screen name='register' component={Register} />
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='home' component={Home} />
                <Stack.Screen name='create' component={Create} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}