import { View, Text,Pressable ,StyleSheet, Button} from 'react-native';

function Primarybutton({children, onPress}){
    return(
        
         <View style={styles.buttonouterconatiner}> 
         <Pressable style={({pressed}) => 
         pressed 
         ? [styles.innerconatiner,styles.pressed]
         : styles.innerconatiner
        } 
        onPress={onPress}
         android_ripple={{color:"#1e293b"}}>
            <Text style={styles.buttontext}>{children}</Text>
            </Pressable>
         </View>
       
    );
}
export default Primarybutton;
const styles=StyleSheet.create({
    buttonouterconatiner:{
        margin:4,
        overflow:'hidden',

    },
    
    buttontext:{
        borderRadius:10,
       padding:8,
       textAlign:'center',
       backgroundColor:'#1e293b',
       color: '#eab308',
       fontSize:20,
       fontWeight:'bold',
    },
    pressed:{
        opacity:0.75
    }
});