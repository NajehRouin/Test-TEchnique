
import React, { Component } from 'react'
import  { View, Text, TouchableOpacity,ScrollView,FlatList,Dimensions } from 'react-native'
import { fetchDataApi } from '../action/actionCreator'
import { connect } from 'react-redux'
export class ReduxHome extends Component {
  render() {
    return (
        <View >
   
        <ScrollView  horizontal={true}>            
                 <View>
         <FlatList
       
                       style={{marginTop:10,marginBottom:10 }}
                       //horizontal={true}
                      
                         data={this.props.getData()}
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
}
const mapStateToProps = state=>{
    return{
      newState: state.nav
    }
  }
  const mapDispatchToProps = dispatch =>{
    return{
      getData:()=>dispatch(fetchDataApi())
    }
  }


  export default connect (mapStateToProps, mapDispatchToProps) (ReduxHome)