import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput, Button, Image, } from 'react-native';

export default function App() {

  // All Functions
  var textInputValue = "<Welcome to the dark side!>"; // String variable
  const handlePress = () => console.log(textInputValue); // const arrow function
  const handleChangeText = () => console.log(textInputValue); // const arrow function

  return (

    <View>
      
      <View
        style={{width:"70%", height: "80%", backgroundColor: "#5DADE2"}}>
          <Text> 
          <Text style={{ fontWeight: "bold", fontSize:35 }}> WELCOME </Text>
          
          <Text style={{fontStyle: 'italic',fontWeight:"550"}}> 
          thank you for reading this random text, that has nothing to do but kill some of your time :)</Text>
        </Text>
        <Text>
          "Programing is 10% writing code and 90% understading why it's not working"
        </Text>
          </View>
        

        <View
          style={{width:"10%", height:"20%", backgroundColor:"white"}}
          ></View>

        <Text style={{fontWeight:"bold", fontSize:25}}> What would you like to out of this course </Text>
        <View style={{width:"30%", height:"50%", backgroundColor: "#ABB2B9"}}>
     <TextInput placeholder="Initial Text" onChangeText={handleChangeText} />
      
      </View>

        <View
          style={{width:"10%", height:"25%", backgroundColor:"whitle"}}></View>


          <Text style={{fontWeight:"bold", fontSize:30}}>
            An emoji describing how you are feeling about the course:
          </Text>

      <Image
      
        style={{ width: 100, height: 100 }}
        source={{
          uri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        }}
      />

      <View
        style={{width:"10%", height:"30%", backgroundColor:"white"}}
      ></View>


        <View style={main.container}>
      <StatusBar style="auto" />

        <Button title="Submit" onPress={handlePress}/>
        <Text>with great power comes...: {textInputValue}</Text>
        </View>
    </View>


  );
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: "4rem",
  },
});

