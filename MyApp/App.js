import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const fruitLogo = require('./assets/Fruits.png');
const eggLogo = require('./assets/Eggs.png');
const meatLogo = require('./assets/meat.png');
const pomLogo = require('./assets/pomogranate.png');
const oliveLogo = require('./assets/Olive.png');
const desertLogo = require('./assets/deserts.png');


export default function App() {
  return (
    <ScrollView>
      <SafeAreaView styles = {styles.container}>
           <View styles = {styles.inputContainer}>
           <Icon  name='search' size= {20} color= 'gold' flexDirection = 'left' style= {styles.icon}/>
            <TextInput
            style= {styles.input}
            placeholder="Rice" color='#FF882E5E' />
           </View>
        </SafeAreaView>
        <SafeAreaView style= {styles.search}>
          <View style = {styles.history}>
          <Text>Search History</Text>
          <Text>clear</Text>
          </View>
        <View  style= {styles.others}>
        <Text>others</Text>
        <Text>women</Text>
        <Text>men clo</Text>
        <Text>electronics</Text>
        <Text>shirts</Text>
        <Text>discounted items</Text>
        <Text>Fresh vegetables</Text>
        </View>
        </SafeAreaView  >
       
       <SafeAreaView>
         <View style= {styles.box}>
        <View>
          <Image source= {fruitLogo} style = {{width: 111.38, height: 74.9, Top: 27.68, left:31.1 }} />
        </View>
        <View>
          <Text>Fresh Fruits $ Vegetables</Text>
        </View>
         </View>

         <View style= {styles.card}>
        <View>
          <Image source= {meatLogo} style = {{width: 102.13, height: 72.69, Top: 235, left:32, paddingTop:20 }} />
        </View>
        <View style= {{paddingTop:20}}>
          <Text>Meat and fish</Text>
        </View>
         </View>
      
         <View style= {styles.card}>
        <View>
          <Image source= {pomLogo} style = {{width: 89, height: 70, Top: 771, left:161  }} />
        </View>
        <View>
          <Text> Men'S Cotton Ja...</Text>
          <Text>Kigadi Market Kaduna State</Text>
        </View>
         </View>
      
         <View style= {styles.card2}>
        <View>
          <Image source= {oliveLogo} style = {{width: 102.13, height: 72.69, Top: 235,  }} />
        </View>
        <View>
          <Text>Meat and fish</Text>
        </View>
         </View>

         <View style= {styles.card3}>
        <View>
          <Image source= {desertLogo} style = {{width: 102.13, height: 72.69, Top: 235,  }} />
        </View>
        <View>
          <Text>Meat and fish</Text>
        </View>
         </View>

         <View style= {styles.card4}>
        <View>
          <Image source= {eggLogo} style = {{width: 102.13, height: 72.69, Top: 235,  }} />
        </View>
        <View>
          <Text>Meat and fish</Text>
        </View>
         </View>

         <View style={styles.icon}>
          <Pressable style = {styles.button}>
            <Icon 
            name ='plus'
            size ={28}
            color = 'white'
            backgroundColor= '#087319'
            width = {45.67}
            height = {45.67}
           borderRadius = {17}
            />
          </Pressable>
          <Pressable style= {styles.button}>
            <Icon 
            name ='plus'
            size ={28}
            color = 'white'
            backgroundColor='#087319'
            width = {45.67}
            height = {45.67}
           borderRadius = {17}
            />
          </Pressable>
         </View>

         <View>
         <View>
         <Icon 
            name ='home'
            size ={28}
            color = 'black' />
            <Text>Home</Text>
        </View> 
        <View>
         <Icon 
            name ='search'
            size ={28}
            color = 'black' />
            <Text>search</Text>
        </View> 
        <View>
         <Icon 
            name ='trend'
            size ={28}
            color = 'black' />
            <Text>Trend</Text>
        </View> 
        <View>
         <Icon 
            name ='book'
            size ={28}
            color = 'black' />
            <Text>Order</Text>
        </View> 
        <View>
         <Icon 
            name ='person'
            size ={28}
            color = 'black' />
            <Text>Profile</Text>
        </View> 
         </View>
      
       </SafeAreaView>
    </ScrollView>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   borderWidth: 1,
   borderColor: 'blue',
   borderRadius: 8,
   paddingHorizontal: 10,
   backgroundColor:'blue'  
  },
  // input: {
  //   width: 286.72,
  //   height: 51,
  //   top:109,
  //   left: 30,
  //   backgroundColor: 'white',
  //   marginTop: 1,
  //   borderRadius:10,
  //   borderColor: 'blue',
  //   borderwidth: 2,
  //   backgroundColor: 'blue'
    
  // },

  search: {
    marginTop: 30,
    backgroundColor: 'yellow',
    width: 372,
    height: 100,
    top: 50,
    left: 28,
    marginTop:80,
  },
  
  history: {
  flexDirection: 'row',
  alignItems: 'stretch',
   width: 372,
   height: 27,
   top: 200,
   left:28,
  },

  others:{
    width: 371.03,
    height: 63,
    top:237,
    left: 28.97,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  card: {
  width: 50.5,
  height: 189.11,
  border: 1, 
  backgroundColor: 'blue'
  },
  card:{
    width: 174.5,
    height: 189.11,
    borderRadius: 18,
    borderwidth: 1,
    backgroundColor:'blue'
  }, 
  box:{
    flex:1, 
    padding: 20,
    backgroundColor: '#53B175B2',
    width: 174.5,
    height: 189.11,
    border: 1,
    borderRadius: 10,
    marginTop:100
  },
  card: {
   width: 174.5,
   backgroundColor: '#F7A593',
   height: 189.11,
   top: 204.11,
   left: 0.5,
   borderRadius:18,
   marginBottom: 200,
   alignItems: 'center'
  },
  card1: {
   width: 169,
   height: 249,
   top:746,
   left: 35,
   Radius: 18,
   border:1 
  },


});
