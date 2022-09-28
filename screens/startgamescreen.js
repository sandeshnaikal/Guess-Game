import { useState } from 'react';
import {TextInput,Text, View, StyleSheet, Alert} from 'react-native';

import Primarybutton from '/home/bullwork/game/components/Primarybutton.js';

  

function Startgamescreen({onpicknumber}){
    const [enterednumber,setenterednumber]= useState('');
   

    
   function numberInputhandler(enteredText){
    setenterednumber(enteredText);
   }

   function resetinputhandler(){
    setenterednumber('');
   }

   function confirmInputhandler(){
         const chosennumber = parseInt(enterednumber);
         if(isNaN(chosennumber) || chosennumber <=0 || chosennumber >99){
           Alert.alert('Invalid Number', 'Number has to be in 1 and 99',
           [{text:'okay', style: 'destructive', onPress: resetinputhandler}]
           );
            return;
         }

          onpicknumber(chosennumber);
   }
    return(
    <View style={styles.conatiner}>
        <View style={styles.guessconatiner}>
            <Text style={styles.guess}>Guess a Number</Text>
        </View>
     <View style={styles.inputconatiner}>
        <Text style={styles.inputtext}>Enter a Number</Text>
        <TextInput style={styles.input} 
        maxLength={2} 
        keyboardType="number-pad" 
        autoCapitalize='none' 
        autoCorrect={false}
        onChangeText={numberInputhandler}
        value={enterednumber}
        />
        <View style={styles.button} >
            <View style={styles.buttoncontainer}>
              <Primarybutton onPress={resetinputhandler}>Reset</Primarybutton>
            </View>
            <View style={styles.buttoncontainer}>
               <Primarybutton onPress={confirmInputhandler}>Confirm</Primarybutton>
            </View>
        </View>
     </View>
    </View>
    );
}

export default Startgamescreen;

const styles= StyleSheet.create({
    conatiner:{
      marginTop:100
    },
    inputtext:{
        borderRadius:10,
        padding:8,
        textAlign:'center',
        color:'#ddb52f',
        fontSize:30,
        fontWeight:'bold',
    },
    guessconatiner:{
       padding:10,
       alignItems:'center',
    },
    guess:{
        fontSize:30,
        fontWeight:'bold',
        color:'#eab308',
        textAlign: 'center',
        width:300,
        borderColor:'red',
        padding: 12,
        backgroundColor:'#1e293b',
        borderRadius:10,
    },
    inputconatiner:{
        
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
        marginHorizontal:24,
        padding:20,
        backgroundColor:'#1e293b',
        borderRadius:10,
        elevation:4,
    },
    input:{
         height:50,
         width:50,
         fontSize: 32,
         borderBottomColor: '#ddb52f',
         borderBottomWidth:2,
         color: '#ddb52f',
        marginVertical:4,
        fontWeight:'bold',
        alignItems:'center',
        
    },
    button:{
        flexDirection:'row',
       
    },
    buttoncontainer:{
       flex:1,
       
    }
});