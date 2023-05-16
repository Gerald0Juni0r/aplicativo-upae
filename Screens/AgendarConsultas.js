import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Button } from 'react-native';

// Icones
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function AgendarConsultasPage({ navigation }) {

  let openAjuda = () => {
    navigation.navigate("Ajuda")
  }
  let openHome = () => {
    navigation.navigate("Home")
  }
  let openPerfil = () => {
    navigation.navigate("Perfil")
  }
  let openNotification = () => {
    navigation.navigate("Notification")
  }
  let openCalendarioAgendarConsultas = () => {
    navigation.navigate("CalendarioAgendarConsultas")
  }

  return (
    <View style={ styles.container }>
        <View style={ styles.header }>
            <Image
                style={ styles.logoHeader }
                source={ require('../assets/logoTypes/logoHeader.png') }
            />
            <MaterialIcons 
                name={ 'notifications-none' } 
                size={ 30 } 
                color="black"
                onPress={ openNotification }
            />
        </View>
        <TouchableOpacity onPress={ openHome }>
            <Image
                style={ styles.return }
                source={ require('../assets/Icons/return.png') }
            />
        </TouchableOpacity>
        <View style={ styles.agendarConsultacontainer }>
            <Image
                style={ styles.logoLogin }
                source={ require('../assets/logoTypes/logo.png') }
            />
            <View style={ styles.textAgendarConsultacontainer }>
                <Text style={ styles.textAgendar }>
                    Preencha o campo abaixo com o codigo fornecido por seu posto de saúde
                </Text>
            </View>
            <View style={ styles.inputContainer }>
                <TextInput
                    position
                    keyboardType='numeric'
                    style={ styles.inputCodigoAgendar }
                    placeholder='CÓDIGO AQUI'
                    maxLength={ 15 }
                />
            </View>
            <View style={ styles.buttonContinuarContainer }>
                <Button 
                    title="Continuar" 
                    color={ 'black' }
                    style={ styles.buttonEntrar }
                    onPress={ openCalendarioAgendarConsultas }
                />
            </View>
        </View>
        <View style={ styles.footer }>
            <View style={ styles.buttonFooter }>
                <MaterialCommunityIcons 
                    name={ 'help-circle-outline' } 
                    size={ 42 } 
                    color="black" 
                    onPress={ openAjuda }
                />
                <Text>Ajuda</Text>
            </View>
            <View style={ styles.buttonFooter }>
                <MaterialCommunityIcons 
                    name={ 'home-circle-outline' } 
                    size={ 42 } 
                    color="black" 
                    onPress={ openHome }
                />
                <Text>Home</Text>
            </View>
            <View style={ styles.buttonFooter }>
                <Ionicons 
                    name={ 'person-circle-outline' } 
                    size={ 40 }
                    color="black"
                    onPress={ openPerfil }
                />
                <Text>Perfil</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9FBFA',
    },
    header: {
        paddingTop: '7%',
        paddingBottom: '2%',
        paddingHorizontal: '5%',
        backgroundColor: '#99EBE9',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollViewContainer: {
        paddingTop: '2%',
        paddingBottom: '15%',
    },
    agendarConsultasContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '15%',
    },
    return: {
      left: '5%',
      marginTop: '2%',
    },
    agendarConsultacontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '25%',
    },
    textAgendarConsultacontainer: {
        textAlign: 'justify',
        paddingHorizontal: '10%',
        paddingVertical: '5%',
    },
    logoLogin: {
        marginBottom: 15,
    },
    inputCodigoAgendar: {
        backgroundColor: '#99EBE9',
        textAlign: 'center',
        paddingHorizontal: '20%',
        paddingVertical: '2%',
        borderRadius: 10,
    },
    buttonContinuarContainer: {
        backgroundColor: '#0BB9B7',
        borderRadius: 20,
        width: 180,
        marginTop: 20,
        marginBottom: 30,
    },
    footer: {
        paddingVertical: '1%',
        paddingHorizontal: '5%',
        backgroundColor: '#99EBE9',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonFooter: {
        alignItems: 'center',
    },
});