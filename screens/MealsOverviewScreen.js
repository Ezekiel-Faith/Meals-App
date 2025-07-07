import { useRoute } from '@react-navigation/native';
import { use } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MealsOverviewScreen({ route }) {
  // const route = useRoute(); //can be used as an alternative to route prop
  const catId = route.params.categoryId;

  return (
    <View styles={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
