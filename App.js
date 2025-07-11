import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
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
          <Stack.Screen
            name='Meals Overview'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   const catTitle = route.params.categoryTitle;
            //   return {
            //     title: catId.title,
            //   };
            // }}
          />
          <Stack.Screen name='Meal Detail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
