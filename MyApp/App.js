import { StatusBar } from 'expo-status-bar'; 
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, Pressable, Button } from 'react-native';
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
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name='search' size={20} color='gold' style={styles.icon} />
          <TextInput style={styles.input} placeholder="Search" placeholderTextColor='gold' />
        </View>
          

          <View class= {styles.searchContainer}>
            <View styles={styles.search}>
             <Text>Search History</Text>
             <Text>clear</Text>
            </View>
          </View>
        

        <View style={styles.gridContainer}>
          <View style={[styles.card, {backgroundColor: '#53B1751A'}]}>
            <Image source={fruitLogo} style={[styles.image, {width:113.38, height: 74.9, paddingBottom: 1 }]} />
            <Text>Fresh Fruits & Vegetables</Text>
          </View>
          <View style={[styles.card, {backgroundColor:'#F8A44CB2'}]}>
            <Image source={oliveLogo} style={styles.image} />
            <Text>Cooking Oil $ Ghee</Text>
          </View>
          <View style={[styles.card, {backgroundColor:'#F7A593'}]}>
            <Image source={meatLogo} style={styles.image} />
            <Text>Meat $ Fish</Text>
          </View>
          <View style={[styles.card, {backgroundColor: '#D3B0E0'}]}>
            <Image source={desertLogo} style={styles.image} />
            <Text>Bakery $ Snacks</Text>
          </View>
          <View style={styles.card}>
            <Image source={pomLogo} style={styles.image} />
            <Text>Men's Cotton Ja..</Text>
            <Text style= {styles.smallText}>Kigadi Market Kaduna State</Text>
            <Text style= {styles.number}> #4,000</Text>
          </View>
          <View style={styles.card}>
            <Image source={eggLogo} style={styles.image} />
            <Text>Eggs</Text>
            <Text style= {styles.smallText}>Kigadi Market Kaduna State</Text>
            <Text style= {styles.number}> #4,000</Text>
          </View>
        </View>


        <View style= {styles.verticalButton}>
          <Pressable style={styles.button}>
            <Icon name='plus' size= {28} color='white' />
          </Pressable>

          <Pressable style={styles.button}>
            <Icon name='plus' size= {28} color='white' />
          </Pressable>
        </View>

        <View style={styles.iconBar}>
          <Pressable style={styles.iconButton}>
            <Icon name='home' size={28} color='grey' />
            <Text style={styles.iconText}>Home</Text>
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Icon name='search' size={28} color='green' />
            <Text style={styles.iconText}>Search</Text>
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Icon name='line-chart' size={28} color='grey' />
            <Text style={styles.iconText}>Trend</Text>
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Icon name='book' size={28} color='grey' />
            <Text style={styles.iconText}>Orders</Text>
          </Pressable>
          <Pressable style={styles.iconButton}>
            <Icon name='user' size={28} color='grey' />
            <Text style={styles.iconText}>Profile</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: '#FF882E5E',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',

  },
  card: {
    width: 174.5,
    height: 189.11,
    backgroundColor: '#f7f7f7',
    borderRadius: 18,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 20
  },
  image: {
    width: 100,
    height: 70,
    marginBottom: 10,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'blue'
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    color: 'grey',
    marginTop: 5,
  },
  smallText: {
    fontSize: 10,
    lineHeight: 18,
    font: 'Poppins',
    fontWeight: 400,
  },
  number: {
    color: '#FD903E',
    lineHeight: 18,
    font:'poppins',
    size: 14,
  },

  verticalButton:{
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'flex-start',
   marginRight: 10,
   gap: 140,
   position: 'absolute',
   marginTop: 680
  
   
  },
  button: {
    backgroundColor: '#087319',
    width: 45.65,
    height: 45.67,
    left: 163,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center'
  


  }
});
