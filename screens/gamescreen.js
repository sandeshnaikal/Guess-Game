import { useState , useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';

import Primarybutton from '/home/bullwork/game/components/Primarybutton.js';
import Numberconatiner from '/home/bullwork/game/screens/numbercontainer.js';

function generaterandombetween (min,max,exclude) {

    const randomnumber = Math.floor(Math.random() * (max-min)) + min;
    
    if (randomnumber===exclude){
        return generaterandombetween (min,max,exclude);
    }
    else{
        return randomnumber;
    }
}

let minboundary=1;
let maxboundary=100;

function Gamescreen({usernumber,ongameover}){
    const initialguess = generaterandombetween(1,100,usernumber);
    const [currentguess, setcurrentguess]=useState(initialguess);
    

    useEffect(() => {
        if (currentguess===usernumber){
         ongameover();
        }
    },[currentguess,usernumber,ongameover]
    );

    useEffect(() =>{
        minboundary=1;
        maxboundary=100;
    }, []);

    function nextguesshandler(direction){
      if((direction==='lower'&& currentguess<usernumber)
      ||(direction==='higher'&& currentguess>usernumber))
      {
        Alert.alert("Don't lie",'you know  this is wrong...',[{text:'sorry!',style:'cancel'}]);
        return;
      }
       if(direction==='lower'){
        maxboundary=currentguess;
       }else{
        minboundary=currentguess+1;
    }
        const newrandomnumber= generaterandombetween(minboundary,maxboundary,currentguess);
        setcurrentguess(newrandomnumber);
       }
    return (
    <View style={styles.screen}>
        <View  style={styles.titleconatiner}>
         <Text style={styles.title}>Opponent's Guess</Text>
        </View>
        <View style={styles.guessconatiner}>
            <Numberconatiner>{currentguess}</Numberconatiner>
        </View>
        <View style={styles.title}>
        <View style={styles.text} >
           <View>
            <Text style={styles.title}>Lower</Text>
           </View>
            <View>
               <Text style={styles.title}>Higher</Text>
               </View>
        </View>    
        <View style={styles.text}>
            <View style={styles.button}>
              <Primarybutton onPress={nextguesshandler.bind(this,'lower')}>-</Primarybutton>
            </View>
            <View style={styles.button}>
                <Primarybutton onPress={nextguesshandler.bind(this,'higher')}>+</Primarybutton>
            </View>
        </View>
        </View>
        
    </View>
    )
}
export default Gamescreen;

const styles= StyleSheet.create({
    screen:{
        flex:1,
        padding:40,
    },
    titleconatiner:{
      padding:30,   
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#eab308',
        textAlign: 'center',
        
        padding: 12,
        backgroundColor:'#1e293b'
    },
    guessconatiner:{
       width: 300,
       height:200,
       padding:10,
       paddingLeft:50
    },
    text:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button:{
       width:100,
       fontSize:100,
    }

})