import {View, Text, StyleSheet, Button} from 'react-native';

import Primarybutton from '/home/bullwork/game/components/Primarybutton.js';

function Gameoverscreen({roundsnumber,usernumber,onstartnewgame}){
    return (
        <View>
        <View style={styles.guessconatiner}>
        <Text style={styles.guess}>Game is Over</Text>
        </View>
        <View style={styles.guessconatiner}>
        <Text style={styles.guess}>
            Your Chosen Number is :-
            <Text style={styles.highlight}>{usernumber}</Text> </Text>
        </View>
        <View style={styles.guessconatine}>
        <Primarybutton onPress={onstartnewgame} style={styles.guess}>Start New Game</Primarybutton>
        </View>
        </View>
    );
}
export default Gameoverscreen;

const styles= StyleSheet.create({
    guessconatiner:{
        paddingTop:70,
        alignItems:'center',
     },
     guessconatine:{
        overflow:'hidden',
        paddingTop:70,
        alignItems:'center',
        backgroundColor:'#eab308',
     },
     guess:{
        overflow:'hidden',
         fontSize:30,
         fontWeight:'bold',
         color:'#eab308',
         textAlign: 'center',
         width:250,
         borderColor:'red',
         padding: 20,
         backgroundColor:'#1e293b',
         borderRadius:10,
     },
     highlight:{
        color:'red',
        margin:5,
        
     }

});