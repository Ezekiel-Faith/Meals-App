import { StyleSheet, Text, View } from 'react-native';

export default function MealsOverviewScreen() {
  return (
    <View styles={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
