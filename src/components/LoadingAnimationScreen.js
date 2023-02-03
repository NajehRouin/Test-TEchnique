import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,Image,Dimensions,Text,Animated 
} from 'react-native';

import img from '../../assests/images/load.gif';


const LoadingImage = () => {
    const [counter, setCounter] = useState(1);
    const MAX_DOTS = 3;

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter((counter % MAX_DOTS) + 1);
        }, 1000);
        return () => clearInterval(intervalID);
    }, [counter]);



    return (
        <View style={{
            flexDirection:'column' ,
            justifyContent: 'center',
            alignContent:'center',
            alignItems:'center',
          
        }}>
            <Image
               style={{width:60,height:60}}
               source={img}
              
            />

         
            
            
        </View>
    );
};










const LoadingAnimationScreen = ({ navigation }) => {

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            navigation.navigate('Accueil');
        }, 5000);

        return () => clearTimeout(timeoutID);
    }, []);

    return (
        <SafeAreaView style={styles.screen}>
          
            <LoadingImage />
         
        </SafeAreaView>
    );
}

export default LoadingAnimationScreen;


const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        flex: 1,
        backgroundColor: '#FFF',
        
    },
  
  
});