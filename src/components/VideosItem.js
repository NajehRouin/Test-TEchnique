import { StyleSheet, Text, TouchableOpacity, View,Dimensions,Image } from 'react-native'
import React from 'react'
const SCREEN_WIDTH=Dimensions.get('window').width;
const VideosItem = (props,OnpressList) => {
    const uriImage="https://image.tmdb.org/t/p/w300"
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.OnpressList } >
            <View style={styles.cardVideo}>
                <Image style={styles.images}
                    source={{uri:uriImage+props.backdrop_path}}
                />
                <View style={styles.detailVideo}>
                     
                                <Text style={styles.title}>{props.title}</Text>
                                <Text style={styles.popularity}>popularity: {props.popularity}</Text>
                                <Text style={styles.description}>{props.overview}</Text>
                                <Text style={styles.popularity}>first_air_date:{props.first_air_date}</Text>
                                <Text style={styles.langue}>language:{props.original_language}</Text>

                                
                </View>



            </View>
      </TouchableOpacity>
    </View>
  )
}

export default VideosItem

const styles = StyleSheet.create({
    container:{
      
        borderRadius:20,
        backgroundColor:"#D3D3D3",
         width:SCREEN_WIDTH*0.9,
        marginTop:10,
        marginHorizontal:15,
        
        height:180,
        marginBottom:5,
        padding:5,
      
    },
    images:{
        width:100,
        height:130,
        marginTop:10
    },
    cardVideo:{
      
        justifyContent:'space-between',
       flexDirection: "row",
       borderBottomEndRadius:100,
       width:SCREEN_WIDTH*0.80,
       borderBottomStartRadius:20,
       borderTopStartRadius:20,
       borderTopEndRadius:5,
       height:90,
       padding:5
    },
    detailVideo:{
        justifyContent:'space-between',
        flexDirection:'column',
       
        height:90,
        padding:20,
        width:SCREEN_WIDTH*0.60,
    },
    titleVideo:{
        justifyContent:'space-evenly',
        flexDirection:'row',
    },
    title:{
        fontSize:12,
        fontWeight:'bold',
        color:'black'
    },
    popularity:{
        fontSize:10,
       
        color:'green'
    },
    description:{
        fontSize:10,
        color:'gray',
        marginEnd:10
  
    
    },
    langue:{ 
        fontSize:10,
        marginTop:10,
       marginLeft:90,
        color:'green'
    }

})