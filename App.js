import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Meals Categories' component={CategoriesScreen} />
        </Stack.Navigator>

        {/* <Stack.Navigator>
          <Stack.Screen
            name='Meals Categories'
            component={CategoriesScreen}
            options={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              // title: 'All Categories',
            }}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
}
