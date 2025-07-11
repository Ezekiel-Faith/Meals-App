import { StyleSheet, Text, View } from 'react-native';

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.text}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#e2b497',
  },
  text: {
    color: '#351401',
    textAlign: 'center',
  },
});
