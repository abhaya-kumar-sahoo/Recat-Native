import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import User from './Control';

function HomeScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [done, setdone] = useState('f');

  const submit = e => {
    if ((email === '') & (password === '')) {
    } else if ((email === 'memofac') & (password === 'memofac')) {
      navigation.navigate('Details');
    } else {
      alert('Please Fill Correct Details');
    }
  };
  return (
    <View style={[styles.container, {flexDirection: 'column'}]}>
      <View style={{flex: 1, backgroundColor: 'white',zIndex:100}}>
        <View style={{flex: 1, right: 0, backgroundColor: 'white', zIndex: 1}}>
          <Text
            onPress={submit}
            style={[
              styles.dones,
              {
                color:
                  email.length > 0 && password.length > 0 ? '#524848' : '#ebebeb',
              },
            ]}>
            Done
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.image} source={require('./assets/logo.png')} />
        </View>
      </View>

      <View style={styles.downView}>
        <Text
          style={{
            paddingBottom: 10,
            paddingRight: '40%',
            fontWeight: '900',
            fontSize: 20,
          }}>
          Username
        </Text>
        <View style={[styles.inputView]}>
          <TextInput
            style={[
              styles.TextInput,
              {backgroundColor: email.length > 0 ? '#524848' : '#c4c0c0'},
            ]}
            textContentType="emailAddress"
            placeholder="Enter name"
            placeholderTextColor="#FFFFFF"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <Text
          style={{
            paddingBottom: 10,
            paddingRight: '40%',
            fontWeight: '900',
            fontSize: 20,
          }}>
          Password
        </Text>
        <View style={styles.inputView}>
          <TextInput
            style={[
              styles.TextInput,
              {backgroundColor: password.length > 0 ? '#524848' : '#c4c0c0'},
            ]}
            placeholderTextColor="#FFFFFF" 
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
      </View>
    </View>
  );
} 

function DetailsScreen({navigation}) {
  return <User />;
}

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
  },

  downView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
    zIndex:1
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingLeft: 30,
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    position: 'relative',
    marginBottom: 0,
  },
  dones: {
    position: 'absolute',
    right: 20,
    top: 15,
    fontWeight: '900',
    fontSize: 20,
    //color:"red"
  },

});
