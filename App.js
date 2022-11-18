import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Updates from 'expo-updates';
import { checkForUpdateAsync } from 'expo-updates';

export default function App() {
  async function checkForUpdates() {
    try {
      const update = await Updates.checkForUpdateAsync();
      alert(update.isAvailable ? 'update is available' : 'no update available');
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Update" onPress={checkForUpdates} />
      <StatusBar style="auto" />
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
