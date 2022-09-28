import { useState } from 'react';
import { StyleSheet,ImageBackground, View, SafeAreaView}  from 'react-native';

import Startgamescreen from '/home/bullwork/game/screens/startgamescreen.js';
import Gamescreen from '/home/bullwork/game/screens/gamescreen.js';
import Gameoverscreen from '/home/bullwork/game/screens/gameoverscreen.js';

export default function App() {
  const [usernumber,setusernumber]=useState();
  const [gameisover, setgameisover] = useState(true);
  const [guessrounds, setguessrounds]= useState(0);

  function pickednumberhandler(pickednumber){
    setusernumber(pickednumber);
    setgameisover(false);
  }

  function gameoverhandler(){
    setgameisover(true);
  }

  function startnewgamehandler(){
      setusernumber(null);
      setguessrounds(0);
  }
 

  let screen = <Startgamescreen onpicknumber={pickednumberhandler} />;

  if (usernumber){
    screen = <Gamescreen usernumber={usernumber} ongameover={gameoverhandler} />

  }

  if(gameisover && usernumber){
     screen = <Gameoverscreen usernumber={usernumber} roundsnumber={guessrounds} onstartnewgame={startnewgamehandler}  />
   }


  return (
    <View style={styles.rootscreen}>
     
      <SafeAreaView style={styles.rootscreen}>
       {screen}
       </SafeAreaView>
    
    </View>
  );
}

const styles = StyleSheet.create({
   rootscreen:{
    flex:1,
    backgroundColor: '#eab308',
   },
  
});
