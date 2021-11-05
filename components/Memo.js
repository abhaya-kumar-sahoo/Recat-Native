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
    image: 'https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg',
    name: 'Sultan',
    year: '2015',
    recommend: 'Recommended: Y',
    top: 'Top: Y',
    place:'5'
  },
  {
    image: 'https://png.pngtree.com/png-clipart/20201209/original/pngtree-green-park-png-image_5630139.jpg',
    name: 'Eco Park',
    year: 'Kokata, India',
    recommend: 'Recommended: Y',
    top: 'Top: Y',
    place:'3'
  },
  {
    image: 'https://lh3.googleusercontent.com/proxy/iF3hJeSGSu43zYL6iGiEZgDoyTk2DgG8ZpGeHELkT6F68RKJKBpDsQOTXemUuOLqjJT2G2jZ5HdO8DfRpUMp3rkpjiYhgUAvaS4HBuB1ZziVKfOYrLY-73c2fHY2ruTUiAoe2o1IsueGY8eI',
    name: 'Myntra',
    year: '----',
    recommend: 'Recommended: Y',
    top: 'Top: Y',
    place:'5'
  },
  {
    image: 'data:image/png;base64,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',
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
              style={{borderRadius: 60 / 2, height: 60, width: 60,marginBottom:20}}
              source={{uri:element.image}}
            />
          </View>
          <View style={{flex: 1.5, justifyContent: 'center'}}>
            <Text style={{fontWeight: '900', fontSize: 20,paddingTop:5}}>{element.name}</Text>
            <Text style={{fontWeight: '700',paddingTop:5}}>{element.year}</Text>
            <Text style={{fontWeight: '700',paddingTop:5}}>{element.recommend}</Text>
            <Text style={{fontWeight: '700',paddingTop:5}}>{element.top}</Text>
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
  