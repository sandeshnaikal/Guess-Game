import {View,Text, StyleSheet} from 'react-native'

function Numbercontainer({children}){
    return(
        <View style={styles.conatiner}>
            <Text style={styles.numbertext}>{children}</Text>
        </View>
    );
}
 export default Numbercontainer;
const styles=StyleSheet.create({
    conatiner:{
        backgroundColor:'#1e293b',
        padding: 24,
        borderRadius:8,
        margin:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numbertext:{
        color:'#ddb52f',
        fontSize:40,
        fontWeight:'bold'
    }
});