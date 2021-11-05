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
const data=[
    {
        name:'Abhaya',
        state:'Green'
    },
    {
        name:'Barsa',
        state:'Purple'
    },
    {
        name:'Mani',
        state:'Blue'
    },
    {
        name:'Abhaya',
        state:'Red'
    },
    {
        name:'Abhaya',
        state:'Green'
    },
    {
        name:'Abhaya',
        state:'Green'
    },
]

function List(){
    const [state, setState] = useState('All');
    const [listItem, setlistItem] = useState(data);
    const setStatusFilter=state=>{
        if (state != 'All') {
            setlistItem([...data.filter(e=> e.state === state)])
        }else{
            setlistItem(data)
        }
        setState(state)
    }

const renderItem=({item, index})=>{
    return(
        <View key={index} style={styles.itemContainer}>
<View style={styles.itemLogo}>
    <Image
    style={styles.itemImage}
    source={{url:''}}/>
</View>
<View style={styles.itemBody}>
    <Text style={styles.itemName} >{item.name}</Text>
</View>
<View style={[styles.itemStatus,
{backgroundColor:item.state==='Purple' ? "#e5848e":'#69c080'}]}>
    <Text>{item.state}</Text>
</View>
        </View>
    )
}
const separator=()=>{
    return <View style={{height:1, backgroundColor:'yellow'}}/>
}

    return(
        <SafeAreaView  style={StyleSheet.container}>
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
        <FlatList
        data={listItem}
        keyExtractor={(e,i)=> i.toString()}
        renderItem={renderItem}
            ItemSeparatorComponent={separator}
        />
        
        </SafeAreaView>
    )
}

export default List

const styles=StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10,
        justifyContent:'center',
        backgroundColor:"red"
    },
    listTab:{
        flex:1,
        backgroundColor:'white',
        padding:15,
    },
    btnTab:{
        width:Dimensions.get('window').width /3.5,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor:'red',
        justifyContent:'center'
    },
    textTab:{
        fontSize:16
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
