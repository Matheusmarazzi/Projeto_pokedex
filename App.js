import React from "react";
import { ImageBackground, StyleSheet, Text, View, FlatList } from "react-native";
/*import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";*/


//const image = { uri: "img/background.png" };

const App = () => (
  //<NavigationContainer>
    <ImageBackground source={require('/home/matheus/Projetomon/pokedex/img/background.png')} resizeMode="cover" style={styles.image}>
    <FlatList
        data={[
          {key: '#001 Bulbasaur'},
          {key: '#002 Ivysaur'},
          {key: '#003 Venosaur'},
          {key: '#004 Charmander'},
          {key: '#005 Charmeleon'},
          {key: '#006 Charizard'},
          {key: '#007 Squitle'},
          {key: '#008 Wartortle'},
          {key: '#009 Blastoise'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </ImageBackground>
  //</NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems:'center',
  },
  text: {
    color: "blue",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "bold",
    backgroundColor: "#000000c0",
    alignItems:'stretch'
  },
  item: {
    
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#000000c0",
    borderWidth: 1,
    borderColor: "gray",
    color: "white",
    width: 400,
    height:92,
    textDecorationLine: "underline",
  },
});

export default App;