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
    image: 'https://i.pinimg.com/736x/95/d6/64/95d664f276de5a52243932e8d03f6743.jpg',
    name: 'Abhaya',
    dob: '1999',
    gender: 'Male',
    number: '9348557381',
    star:'5',
    thikk:"https://www.linkpicture.com/q/Experienced.png"
  },
  {
    image: 'https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Barsa',
    dob: '2000',
    gender: 'Female',
    number: '5762123876',
    star:'3'
  },
  {
    image: 'https://picsum.photos/seed/picsum/200/300',
    name: 'Mani',
    dob: '2001',
    gender: 'Female',
    number: '5234213443',
    star:'5'
  },
  {
    image: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg',
    name: 'Mani',
    dob: '2001',
    gender: 'Female',
    number: '5234213443',
    star:'5'
  },
  {
    image: 'https://image.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-260nw-1617540484.jpg',
    name: 'Mani',
    dob: '2001',
    gender: 'Female',
    number: '5234213443',
    star:'5'
  },
];

const App = () => (
  <View style={{backgroundColor:"white"}} >
    {DATA.map((element, index) => {
      return (
        <View key={index}>
        <View style={{height: 100, flexDirection: 'row',paddingTop:15}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{borderRadius: 80 / 2, height: 80, width: 80}}
              source={{uri:element.image}}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontWeight: '900', fontSize: 20,paddingBottom:5}}>{element.name}</Text>
            <Text style={{fontWeight: '600',paddingBottom:5}}>{element.dob},{element.gender}</Text>
            <Text style={{fontWeight: '600',paddingBottom:5}}>{element.number}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 20,
              
            }}>
            <Text style={{paddingBottom: 10}}><Image style={{height:10,width:10}} source={require("./assets/Experienced.png")}/>  {element.star}</Text>
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
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'gray',
    width: 60,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default App;
