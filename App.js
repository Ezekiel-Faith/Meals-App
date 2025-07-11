import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name='Meals Categories'
            component={CategoriesScreen}
            options={{
              title: 'All Meals',
            }}
          />
          <Stack.Screen name='Meals Overview' component={MealsOverviewScreen} />
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
