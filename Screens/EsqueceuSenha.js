import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,TextInput, Button, Alert, Image } from 'react-native';

export default function EsqueceuSenhaPage({ navigation }) {
  let openLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={ styles.container }>
        <View style={ styles.returnContainer }>
            <TouchableOpacity onPress={ openLogin }>
                <Image
                style={ styles.return }
                source={ require('../assets/Icons/return.png') }
                />
            </TouchableOpacity>
        </View>
        <Image
            style={ styles.logoLogin }
            source={ require('../assets/logoTypes/logo.png') }
        />
        <View style={ styles.textEsqueceuSenhacontainer }>
            <Text style={ styles.textEsqueceuSenha }>
                Preencha o campo abaixo e você poderá criar uma nova senha.
            </Text>
        </View>
        <View style={ styles.inputContainer }>
            <Text style={ styles.textLogin }>
                E-mail / Nome de usuário
            </Text>
            <TextInput
                position
                keyboardType='numeric'
                style={ styles.inputEsqueceuSenha }
                placeholder='j********a@gmail.com'
                maxLength={ 15 }
            />
        </View>
        <View style={ styles.buttonContinuarContainer }>
            <Button 
                title="Continuar" 
                color={ 'black' }
                style={ styles.buttonEntrar }
                onPress={ () => Alert.alert('Uma nova senha foi enviada para o seu e-mail!') }
            />
        </View>
        <View style={ styles.direitosReservados }>
            <Text> 
            Todos os direitos reservados
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99EBE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnContainer: {
    position: 'absolute',
    left: '5%',
    top: '11%',
  },
  logoLogin: {
    marginBottom: 10,
  },
  textEsqueceuSenhacontainer: {
    textAlign: 'justify',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
  inputEsqueceuSenha: {
    backgroundColor: "#C9FBFA",
    paddingLeft: '3%',
    paddingRight: '20%',
    paddingVertical: '2%',
    borderRadius: 10,
    textAlign: 'left',
  },
  textLogin: {
    margin: '1%',
  },
  inputLogin: {
    paddingLeft: '2%',
    paddingRight: '30%',
    paddingVertical: '2%',
    backgroundColor: "#C9FBFA",
    borderRadius: 10,
  },
  buttonContinuarContainer: {
    backgroundColor: '#0BB9B7',
    borderRadius: 20,
    width: 180,
    marginTop: 15,
  },
  direitosReservados: {
    top: '4%'
  },
});
