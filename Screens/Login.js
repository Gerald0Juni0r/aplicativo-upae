import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View,TextInput, Button, Image } from 'react-native';

export default function LoginPage({ navigation }) {

  let [senha, setSenha] = useState(' ')

  let openHome = () => {
    navigation.navigate("Home")
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name:"Home" }],
    // })
  }
  let openCadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name:"Cadastro" }],
    })
  }

  return (
    <ScrollView style={ styles.scrollcontainer }>

      <View style={ styles.container }>
        <Image
          style={ styles.logoLogin }
          source={ require('../assets/logoTypes/logo.png') }
        />
        <View style={ styles.inputContainer }>
          <Text style={ styles.textLogin }>
            Número do CNS
          </Text>
          <TextInput
            position
            keyboardType='numeric'
            style={ styles.inputLogin }
            placeholder='*** **** **** ****'
            maxLength={ 15 }
          />
          <Text style={ styles.textLogin }>
            Senha
          </Text>
          <TextInput
            style={ styles.inputLogin }
            placeholder='********'
            secureTextEntry
            maxLength={ 8 } 
            onChangeText={ setSenha } 
          />
          <Text> { senha } </Text>
        </View>
        <View style={ styles.buttonEntrarContainer }>
          <Button 
            title="Entrar" 
            color={ 'black' }
            style={ styles.buttonEntrar }
            onPress={ openHome }
          />
        </View>
        <Text style={ styles.esqueceuSenha }>
          Esqueceu a senha?
        </Text>
        <Text onPress={ openCadastrar }>Cadastrar-se</Text>

        <View style={ styles.direitosReservados }>
            <Text>
                Todos os direitos reservados
            </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '30%',
    backgroundColor: '#99EBE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollcontainer: {
    backgroundColor: '#99EBE9',
  },
  logoLogin: {
    marginBottom: 15,
  },
  inputContainer: {
    textAlign: 'left'
  },
  textLogin: {
    margin: 7,
  },
  inputLogin: {
    paddingLeft: '2%',
    paddingRight: '30%',
    paddingVertical: '2%',
    backgroundColor: "#C9FBFA",
    borderRadius: 10,
  },
  buttonEntrarContainer: {
    backgroundColor: '#0BB9B7',
    borderRadius: 20,
    width: 180,
    marginTop: 20,
    marginBottom: 30,
  },
  esqueceuSenha: {
    marginBottom: '5%',
  },
  direitosReservados: {
    top: '25%'
  },
});