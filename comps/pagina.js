import React from "react";
import { ImageBackground, Button, SafeAreaView, Image, StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import Estilo from "/home/matheus/Projetomon/pokedex/Estilos/Style.js";


export default function(){
    return(
        <View style={Estilo.container}> 
            <Text style={Estilo.text}>ola</Text>
            <Text style={Estilo.text}>fd</Text>
        
            
        </View>
    );
}