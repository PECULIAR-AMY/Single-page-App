import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/'
import { Image } from 'react-native';
const fruitLogo = require ('./assets/Fruits.png')
const eggLogo = require('./assets/Eggs.png')
const meatLogo = require('./assets/meat.png')
const pomLogo = require('./assets/pomogranate.png')
const oliveLogo = require('./assets/Olive.png')
const desertLogo = require('./assets/deserts.png')




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
        <View>
        <Text>others</Text>
        <Text>women</Text>
        <Text>men clo</Text>
        <Text>electronics</Text>
        <Text>shirts</Text>
        <Text>discounted items</Text>
        <Text>Fresh vegetables</Text>
        </View>
        </SafeAreaView>
        <ToucheableOpacity>
        <View>
        <Image source={fruitLogo} />
        <View>
        <Image source={oliveLogo} />
        </View>
        <View>
        <Image source={meatLogo} />
        </View>
        <View>
        <Image source={desertLogo} />
        </View>
        <View>
        <Image source={pomLogo} />
        </View>
        <View>
        <Image source={eggLogo} />
        </View>
        </View >
        </ToucheableOpacity>
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
