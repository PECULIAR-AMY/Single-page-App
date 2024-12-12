import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/'




export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style= {styles.container}>
            <TextInput
            style= {styles.input}
            placeholder="Rice"
            />
        </SafeAreaView>

        <SafeAreaView style= {styles.search}>
          <Text > Search History</Text>
          <Text > view</Text>
        </SafeAreaView>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 286.72,
    height: 51,
    Top:109,
    Left: 30,
    backgroundColor: 'grey',
    marginTop: 20,
    borderRadius:10,
  },

  search: {
    marginTop: 30,
    backgroundColor: 'yellow',
  }

});
