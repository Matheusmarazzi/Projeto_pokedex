import React from "react";
import { ImageBackground, Button, SafeAreaView, Image, StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import Estilo from "/home/matheus/Projetomon/pokedex/Estilos/Style.js";

//const image = { uri: "img/background.png" };
const Pilha=createStackNavigator();
const pokemons=[
  {
  ndex:'001',
  tipo1: 'grass',
  tipo2: null,
  nome: 'Bulbasaur',
  foto: '/home/matheus/Projetomon/pokedex/img/bulbasaur.png',
  },
  {
  ndex:'002',
  tipo1: 'grass',
  tipo2: 'poison',
  nome: 'Ivysaur',
  
  },
  {
  ndex:'003',
  tipo1: 'grass',
  tipo2: 'Poison',
  nome: 'Venosaur',

  },
  {
    ndex:'004',
    tipo1: 'Fire',
    tipo2: null,
    nome: 'Charmander',
    },
    {
    ndex:'005',
    tipo1: 'Fire',
    tipo2: null,
    nome: 'Charmeleon',
    
    },
    {
    ndex:'006',
    tipo1: 'Fire',
    tipo2: 'Flying',
    nome: 'Charizard',
  
    },
    {
      ndex:'007',
      tipo1: 'water',
      tipo2: null,
      nome: 'Squirtle',
      },
      {
      ndex:'008',
      tipo1: 'water',
      tipo2: null,
      nome: 'Wartortle',
      
      },
      {
      ndex:'009',
      tipo1: 'water',
      tipo2: null,
      nome: 'Blastoise',
    
      },
]


function TelaInicial({navigation}){
  return(
    <ImageBackground source={require('/home/matheus/Projetomon/pokedex/img/dex.png')} resizeMode="cover" style={Estilo.image}>
    <View style={Estilo.inicial}>
      <Text style={Estilo.botao}
        title="Tela Principal"
        onPress={()=>navigation.navigate('home')}
        >Entrar</Text>
    </View>
    </ImageBackground>
  );
};
function TelaPokemon({navigation}){
  return(
    <ImageBackground source={require('/home/matheus/Projetomon/pokedex/img/background.png')} resizeMode="cover" style={Estilo.image}>
    <View style={Estilo.contaainer}>
      
    </View>
    </ImageBackground>
  );
};
function TelaPrincipal({navigation}){
  return(
    <ImageBackground source={require('/home/matheus/Projetomon/pokedex/img/background.png')} resizeMode="cover" style={Estilo.image}>
       <View style={Estilo.container}>
         <FlatList
             data={pokemons}
             keyExtractor={item=>item.id}
             renderItem={({item})=><View><Text style={Estilo.item}>N°{item.ndex}-{item.nome}</Text></View>}
              //  {key: '#004 Charmander'},
              //  {key: '#005 Charmeleon'},
              //  {key: '#006 Charizard'},
              //  {key: '#007 Squitle'},
              //  {key: '#008 Wartortle'},
              //  {key: '#009 Blastoise'},
             
             //renderItem={({item}) => <Text style={Estilo.item}>{item.key}</Text>}
           />
       </View>
       <View>
       {/* <Button 
        title="Voltar"
        onPress={()=>navigation.goBack('inicio')}
        /> */}
       </View>
  </ImageBackground>
  );
};
export default function App1(){
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="TelaInicial">
        <Pilha.Screen
          name="inicio"
          component={TelaInicial}
          options={{title:'tela inicial'}}
        
        />
        <Pilha.Screen
          name="home"
          component={TelaPrincipal}
          options={{title:'tela Principal'}}
        
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
};



/*<ImageBackground source={require('/home/matheus/Projetomon/pokedex/img/background.png')} resizeMode="cover" style={Estilo.image}>
       <View style={Estilo.container}>
         <FlatList
             data={[
               {key: '#001 Bulbasaur' ,},
               {key: '#002 Ivysaur'},
               {key: '#003 Venosaur'},
               {key: '#004 Charmander'},
               {key: '#005 Charmeleon'},
               {key: '#006 Charizard'},
               {key: '#007 Squitle'},
               {key: '#008 Wartortle'},
               {key: '#009 Blastoise'},
             ]}
             renderItem={({item}) => <Text style={Estilo.item}>{item.key}</Text>}
           />
       </View>
  </ImageBackground>*/