import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View,TextInput, Button, Alert, Image } from 'react-native';

export default function CadastroPage({ navigation }) {
  let openLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name:"Login" }],
    })
  }

  return (
    <View style={ styles.container }>
      <Image
        style={ styles.logoLogin }
        source={ require('../assets/logoTypes/logo.png') }
      />
      <View style={ styles.inputContainer }>
        <Text style={ styles.textLogin }>
        Nome completo
        </Text>
        <TextInput
        keyboardType='text'
        style={ styles.inputLogin }
        placeholder='João da Silva'
        />
        <Text style={ styles.textLogin }>
        Número de telefone
        </Text>
        <TextInput
        keyboardType='numeric'
        style={ styles.inputLogin }
        placeholder='(81) 9****-****'
        maxLength={ 11 }
        />
        <Text style={ styles.textLogin }>
        E-mail
        </Text>
        <TextInput
        keyboardType='email-address'
        style={ styles.inputLogin }
        placeholder='j********a@gmail.com'
        />
        <Text style={ styles.textLogin }>
        CPF
        </Text>
        <TextInput
        keyboardType='numeric'
        style={ styles.inputLogin }
        placeholder='***.***.***-**'
        maxLength={ 11 }
        />
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
        Criar senha
        </Text>
        <TextInput
        style={ styles.inputLogin }
        placeholder='********'
        secureTextEntry
        maxLength={ 8 }  
        />
        <Text style={ styles.textLogin }>
        Repetir a senha
        </Text>
        <TextInput
        style={ styles.inputLogin }
        placeholder='********'
        secureTextEntry
        maxLength={ 8 }  
        />
        <Text style={ styles.lembrarSenha }>Lembrar senha</Text>
      </View>
      <View style={ styles.buttonEntrarContainer }>
        <Button 
        title="Cadastrar-se" 
        color={ 'black' }
        style={ styles.buttonEntrar }
        onPress={ openLogin }
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
  logoLogin: {
    marginBottom: 10,
  },
  inputContainer: {
    textAlign: 'left'
  },
  textLogin: {
    margin: '1%',
  },
  inputLogin: {
    paddingLeft: '2%',
    paddingRight: '30%',
    paddingTop: '2%',
    paddingBottom: '2%',
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
  lembrarSenha: {
    marginTop: '2%'
  },
  direitosReservados: {
    top: '2%'
  },
});
