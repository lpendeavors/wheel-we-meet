import { StyleSheet, Text, View } from 'react-native';

import * as MapboxMap from '@wheel-we-meet/plugin/mapbox-map';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{MapboxMap.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
