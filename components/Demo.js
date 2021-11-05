import React,{useState} from 'react'
import {View,Text,Dimensions,FlatList,Image,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native'

const listTab=[
    {
        state:'All'
    },
    {
        state:'Purpul'
    },
    {
        state:'Green'
    }
]
function Demo() {
    const [state, setState] = useState('All');
 
    const setStatusFilter=state=>{
        setState(state)
    }

  return (
    <SafeAreaView  style={styles.container}>
    <View style={styles.listTab}>
    {
        listTab.map(e=>{
        <TouchableOpacity style={[styles.btnTab, state=== e.state && styles.btnTabActive]}
        onPress={()=> setStatusFilter(e.state)} >
            <Text style={styles.textTab, state === e.state && styles.textTabActive}>{e.state}</Text>
        </TouchableOpacity>
        })

    }

    </View>  
    </SafeAreaView>
  );
}

export default Demo;


const styles=StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
        backgroundColor:"red"
    },
    listTab:{
        flex:1,
        backgroundColor:'gray',
        padding:15,
    },
    btnTab:{
        width:Dimensions.get('window').width /3.5,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'red',
        justifyContent:'center',
        backgroundColor:"black"
    },
    textTab:{
        fontSize:16,
        color:"yellow"
    },
    btnTabActive:{
        backgroundColor:'green'
    },
    textTabActive:{
        color:'blue'
    },
    itemContainer:{
        flexDirection:'row',
        paddingVertical:15
    },
    itemLogo:{
        padding:10
    },
    itemImage:{
        width:50,
        height:50
    },
    itemBody:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center'
    },
    itemName:{
        fontWeight:'900',
        fontSize:16
    },
    itemStatus:{
        backgroundColor:'green',
        paddingHorizontal:6,
        justifyContent:'center',
        right:12
    }

})

