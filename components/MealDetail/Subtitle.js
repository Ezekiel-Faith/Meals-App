import { StyleSheet, Text, View } from 'react-native';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e2b497',
  },

  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
