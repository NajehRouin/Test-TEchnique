import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Linking ,ImageBackground,Dimensions} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Icon } from 'react-native-elements';
const SCREEN_WIDTH=Dimensions.get('window').width
const DetailVideo = ({navigation,route}) => {
const [getVideos,SetGetVideos]=useState([])
const [getlangue,SetGetLangue]=useState([]);

    const {item,id}=route.params

   

    
   
    async function getById(){
            try{
                const response = await fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=c559996ac8559f62e571ce505deda61f");
                const json = await response.json();
                SetGetVideos(json)
                    //console.log("array"+JSON.stringify(getVideos.spoken_languages));
                    SetGetLangue(JSON.stringify(getVideos.spoken_languages))
                    const arrayLang=[]
                  let langue= JSON.stringify(getVideos.spoken_languages.map(key=>{
                        
                 return   arrayLang.push(key.english_name)
                        
                    }))
                     
                     
                    SetGetLangue(arrayLang);
                  

            }
            catch(error){
                console.log(error);
            }
        }
 
            useEffect(() => {
 
                getById();
              
           }, []);
           
  return (
    <View style={styles.container}>
    <ScrollView>
      
      <View style={styles.viewretour}>
                <View style={styles.view2retour}>
                    <Icon
                        name="arrow-left"
                        type="material-community"
                        size={26}
                        onPress={()=>navigation.goBack()}
                    
                    />

                </View>
                <Text style={styles.text2}> Detail {getVideos.title } </Text>
                </View>

        
                <View>
                <ImageBackground
             style={styles.containerImage}
             source={{uri:"https://image.tmdb.org/t/p/w300"+getVideos.backdrop_path}}
               
            >    
            
        
            </ImageBackground>

        </View>
        <View style={{alignContent:'center',alignItems:'center',marginTop:10}}>
                <Text style={styles.title}>{getVideos.title } </Text>
        </View>
        <View style={{padding:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:12,color:'grey',}}>{getVideos.overview}</Text>
        </View>
        <View style={styles.card}>
        <ScrollView>
        <View style={{padding:10}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>popularity: {getVideos.popularity}</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>release_date: {getVideos.release_date}</Text>
        </View>

        <View style={{padding:5}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>revenue: {getVideos.revenue}</Text>
        </View>
        
        <View style={{padding:5}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>original_language: {getVideos.original_language}</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>vote_average: {getVideos.vote_average}</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>vote_count: {getVideos.vote_count}</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>tagline: {getVideos.tagline}</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{fontSize:12,color:'black',fontWeight:'bold'}}>budget: {getVideos.budget} $</Text>
        </View>
        <View style={{padding:5}}>
            <Text style={{fontSize:10,color:'black',fontWeight:'bold'}}>spoken_languages:({getlangue}) </Text>
        </View>
        
        </ScrollView>
      </View>
   
        </ScrollView>
    </View>
  )
}

export default DetailVideo

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        backgroundColor:'#FFFFFF'
    
       
      },
      containerImage:{
        height:200,
        width:350,
        marginTop:30,
        marginLeft:6,
        marginRight:3
        
    },
    viewretour:{
        flexDirection:"row",
        alignItems:"baseline",
        justifyContent: "space-between",
    
    },

    view2retour:{
        margin:10,
        width:40,
        height:40,
       
        alignItems:"center",
        justifyContent: 'center',
        borderRadius:20,
        },
        text2:{
            fontSize:15,
            fontWeight:"bold",
            color:'#1A68B6',
            marginTop:10,
            alignContent:'center',
            alignItems:'center',
            marginRight:115
            },
    title:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',

    },
    card:{
        
        width:SCREEN_WIDTH*0.9,
        backgroundColor:"#D3D3D3",
        padding:10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        margin:20
    }
})