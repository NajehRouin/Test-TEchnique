import { StyleSheet, Text, View ,ScrollView,FlatList,Dimensions} from 'react-native'
import React ,{useState,useEffect} from 'react'
import VideosItem from '../components/VideosItem';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreens = ({navigation}) => {
    const [videos,setVideos]=useState();

    useEffect(() => {

        detchData();
    
    }, []);

    const detchData= async()=>{
        try{
            const response = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=c559996ac8559f62e571ce505deda61f");
            const json = await response.json();
           // console.log(json.results)
            setVideos(json.results)
           // console.log("videos",videos)
        }catch(error){
            console.error(error)
        }
      

    }
  return (
    <View style={styles.constainer}>
   
     <ScrollView  horizontal={true}>            
              <View style={{ width:SCREEN_WIDTH }}>
      <FlatList
    
                    style={{marginTop:10,marginBottom:10 }}
                    //horizontal={true}
                   
                      data={videos}
                      keyExtractor={(item,index)=>index.toString()}
                      renderItem=
                    {
                        ({item,index})=>(
                  
                        
                     
                        <View
                        onPress={()=>{
                          Keyboard.dismiss
                         // Alert.alert("One ",item.name+" :"+item.login);
                        

                      }} 
                    
                        >
               
                                    <VideosItem
                                       
                                       backdrop_path={item.backdrop_path}
                                        title={item.title}
                                        popularity={item.popularity}
                                        overview={item.overview}
                                        first_air_date={item.first_air_date}
                                        original_language={item.original_language}
                                        OnpressList={()=>
                                        {//console.log("iteeeeeeeeeeeeeeem",item);
                                        navigation.navigate("DetailVideo",{item:index,id:item.id })
                              
                                        }
                                      }
                                  
                                        
                                    />
                                    
                                    </View>
                       
                   
                     
                      )
                 
                    }
                 
                />
                </View>
             </ScrollView> 
       
    </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
    constainer:{
        flex:1,      
        backgroundColor:'#DCDCDC',
        marginTop:50
    }
})