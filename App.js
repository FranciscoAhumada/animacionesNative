import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native';
import Animacion1 from './components/Animacion1';
import Animacion2 from './components/Animacion2';
import Animacion3 from './components/Animacion3';
import Animacion4 from './components/Animacion4';
import Animacion5 from './components/Animacion5';
import Animacion6 from './components/Animacion6';
import Animacion7 from './components/Animacion7';

const App = () => {

  const [seleccion , setSeleccion ] = useState(0);

  return (
    <>
    <ScrollView>
      <View style = {styles.contenido}>
            {seleccion === 0 && 
              <View style = {styles.contenedorBtn}>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(1)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Animacion 1</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(2)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Animacion 2</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(3)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Animacion 3</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(4)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Animacion 4</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(5)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Animacion 5</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(6)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Animacion 6</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(7)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Animacion 7</Text>
                    </View>
                </TouchableWithoutFeedback>
              </View>
            }
            {seleccion === 1 && <Animacion1/>}
            {seleccion === 2 && <Animacion2/>}
            {seleccion === 3 && <Animacion3/>}
            {seleccion === 4 && <Animacion4/>}
            {seleccion === 5 && <Animacion5/>}
            {seleccion === 6 && <Animacion6/>}
            {seleccion === 7 && <Animacion7/>}
            <View style = {styles.contenedorBtn2}>
                <TouchableWithoutFeedback
                    onPress = {()=> setSeleccion(0)}
                >
                    <View style={styles.btn}>
                        <Text style={styles.texto}>Volver</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contenido : {
    marginTop : 100,
  },
  contenedorBtn : {
    alignItems : 'center'
  },
  btn : {
    backgroundColor : 'cornflowerblue',
    width : 280,
    height : 80,
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 10
  },
  texto : {
    color : '#FFF',
    fontWeight : 'bold',
    textTransform : 'uppercase',
    fontSize : 28
  },
  contenedorBtn2 : {
    marginTop : 450
  }
});

export default App;
