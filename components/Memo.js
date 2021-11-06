import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,Image,Pressable,Button
} from 'react-native';


const DATA = [
  {
    image: 'https://www.linkpicture.com/q/Movies-W.png',
    name: 'Sultan',
    year: '2015',
    recommend: 'Recommended: Y',
    top: 'Top: Y',
    place:'5'
  },
  {
    image: 'https://www.linkpicture.com/q/Park-W.png',
    name: 'Eco Park',
    year: 'Kokata, India',
    recommend: 'Recommended: Y',
    top: 'Top: Y',
    place:'3'
  },
  {
    image: 'https://www.linkpicture.com/q/Fashion-W.png',
    name: 'Myntra',
    year: '----',
    recommend: 'Recommended: Y',
    top: 'Top: Y',
    place:'5'
  },
  {
    image: 'https://www.linkpicture.com/q/Restaurant-W.png',
    name: 'Chhki Dhani',
    year: 'Jaypur, India',
    recommend: 'Recommended: Y',
    top: 'Top: Y',
    place:'5'
  }
]; 

function Summery(){
    return (
  <View style={{backgroundColor:"white"}} >
    {DATA.map((element, index) => {
      return (
        <View key={index}>
        <View style={{height: 120, flexDirection: 'row'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{borderRadius: 60 / 4, height: 70, width: 70,marginBottom:20}}
              source={{uri:element.image}}
            />
          </View>
          <View style={{flex: 1.5, justifyContent: 'center'}}>
            <Text style={{fontWeight: '900', fontSize: 20,paddingTop:5}}>{element.name}</Text>
            <Text style={{fontWeight: '700',paddingTop:3}}>{element.year}</Text>
            <Text style={{fontWeight: '700',paddingTop:3}}>{element.recommend}</Text>
            <Text style={{fontWeight: '700',paddingTop:3}}>{element.top}</Text>
          </View>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 20,
            }}>
            
            <Pressable style={styles.button}>
              <Text style={styles.text}>Edit</Text>
            </Pressable>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              borderBottomColor: '#d4d5d6',
              borderBottomWidth: 1,
              width: 300,
            }}
          />
        </View>
        </View>
      );
    })}
  </View>
    )
}


export default Summery

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 9,
      borderRadius: 14,
      elevation: 3,
      backgroundColor: 'gray',
      width: 60,
      marginTop:-50
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
  });
  