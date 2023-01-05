import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      resultado: '',
      color: 'black',
    };
  }

  getPeso = peso => {
    this.setState.peso = peso;
    console.log('peso: ' + this.setState.peso);
  };
  getAltura = altura => {
    this.setState.altura = altura;
    console.log('altura: ' + this.setState.altura);
  };
  getResultado = resultado => {
    this.setState({resultado: resultado});
  };
  getColor = color => {
    this.setState({color: color});
  };

  calcularIMC = () => {
    let peso = parseFloat(this.setState.peso);
    let altura = parseFloat(this.setState.altura);
    let IMC = peso / Math.pow(altura, 2);
    this.resultado(IMC);
    console.log(IMC);
  };

  resultado = IMC => {
    IMC < 18.5
      ? (this.setState.resultado = 'Peso insificiente') &&
        (this.setState.color = 'green')
      : null;
    IMC > 18.5 && IMC < 25
      ? (this.setState.resultado = 'Normopeso') &&
        (this.setState.color = 'green')
      : null;
    IMC > 25 && IMC < 27
      ? (this.setState.resultado = 'Sobrepeso grado I') &&
        (this.setState.color = 'green')
      : null;
    IMC > 27 && IMC < 30
      ? (this.setState.resultado = 'Sobrepeso grado II (preobesidad)') &&
        (this.setState.color = 'orange')
      : null;
    IMC > 30 && IMC < 35
      ? (this.setState.resultado = 'Obesidad de tipo I') &&
        (this.setState.color = 'orange')
      : null;
    IMC > 35 && IMC < 40
      ? (this.setState.resultado = 'Obesidad de tipo II') &&
        (this.setState.color = 'orange')
      : null;
    IMC > 40 && IMC < 50
      ? (this.setState.resultado = 'Obesidad de tipo III (mórbida)') &&
        (this.setState.color = 'red')
      : null;
    IMC > 50
      ? (this.setState.resultado = 'Obesidad de tipo IV (extrema)') &&
        (this.setState.color = 'red')
      : null;

    this.getColor(this.setState.color);
    this.getResultado(this.setState.resultado);
  };

  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Calculadora IMC</Text>
        </View>
        <View style={styles.sectionDescription}>
          <Text style={styles.titleDescription}>Datos</Text>
          <View style={styles.sectionTextInputPeso}>
            <Text style={styles.titlePesoAltura}>Peso</Text>
            <TextInput
              style={styles.input}
              label="Peso"
              selectionColor={'white'}
              onChangeText={this.getPeso}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.sectionTextInputAltura}>
            <Text style={styles.titlePesoAltura}>Altura</Text>
            <TextInput
              style={styles.input}
              label="Altura"
              onChangeText={this.getAltura}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.sectionButton}>
            <TouchableOpacity onPress={this.calcularIMC} style={styles.button}>
              <Text style={styles.textButton}>Calcular IMG</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultadoTitle}>Resultado</Text>
            <Text
              style={
                this.state.color === 'green'
                  ? styles.resultadoBueno
                  : this.state.color === 'orange'
                  ? styles.resultadoRegular
                  : this.state.color === 'red'
                  ? styles.resultadoMalo
                  : null
              }>
              {this.state.resultado}
            </Text>
          </View>
        </View>
        <View style={styles.sectionFooter}>
          <Text style={styles.titleFooter}>Created for 2n DAM</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#5C1B82',
  },
  sectionTitle: {
    fontWeight: '600',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 35,
    color: 'red',
  },
  sectionDescription: {
    height: 390,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: 'white',
    margin: 6,
  },
  titleDescription: {
    fontSize: 30,
    color: 'red',
    paddingTop: 20,
    paddingLeft: 35,
  },
  sectionFooter: {
    flex: 1,
  },
  titleFooter: {
    fontSize: 20,
    color: 'grey',
    padding: 13,
  },
  highlight: {
    fontWeight: '700',
  },
  titlePesoAltura: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTextInputPeso: {
    paddingLeft: 20,
    marginTop: 10,
  },
  sectionTextInputAltura: {
    paddingLeft: 20,
    marginTop: 40,
  },
  sectionButton: {
    marginTop: 20,
    padding: 5,
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: '100%',
    borderColor: '#4298f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: '#4298f5',
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginRight: 20,
    borderColor: 'grey',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  resultadoContainer: {
    paddingLeft: 15,
  },
  resultadoTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  resultadoBueno: {
    fontSize: 15,
    color: 'green',
  },
  resultadoRegular: {
    fontSize: 15,
    color: 'orange',
  },
  resultadoMalo: {
    fontSize: 15,
    color: 'red',
  },
});

export default App;
