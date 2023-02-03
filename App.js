import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreens from './src/screens/HomeScreens';
import DetailVideo from './src/screens/DetailVideo';
//import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import LoadingAnimationScreen from './src/components/LoadingAnimationScreen';
const Stack=createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    
   
      <NavigationContainer>
  <Stack.Navigator initialRouteName="Loading">
  <Stack.Screen name="Accueil" component={HomeScreens} options={{headerShown:false}} />
  <Stack.Screen name="DetailVideo" component={DetailVideo} options={{headerShown:false}} />
  <Stack.Screen name="Loading" component={LoadingAnimationScreen} options={{headerShown:false}} />
  </Stack.Navigator>
  </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"

  },
});
