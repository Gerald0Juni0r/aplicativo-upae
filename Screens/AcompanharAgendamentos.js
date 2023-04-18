import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image, FlatList } from 'react-native';

// Icones
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function AcompanharAgendamentosPage({ navigation }) {

  let [consultas, setConsultas] = useState([
    { nomeMedico: 'Dr. Geraldo Nunes', especialidade: 'Cardiologista', dataConsulta: '04/04/2023', key: 1 },
    { nomeMedico: 'Dra. Ana Maria', especialidade: 'Endocrinologista', dataConsulta: '01/03/2023', key: 2 },
    { nomeMedico: 'Dr. Jhonatas Neto', especialidade: 'Urologista', dataConsulta: '12/01/2023', key: 3 },
    { nomeMedico: 'Dr. Ronaldo Moura', especialidade: 'Cardiologista', dataConsulta: '06/12/2022', key: 4 }, 
  ])

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
      <ScrollView style={ styles.scrollViewContainer }>
        <TouchableOpacity onPress={ openHome }>
          <Image
            style={ styles.return }
            source={ require('../assets/Icons/return.png') }
          />
        </TouchableOpacity>
        <View style={ styles.acompanharAgendamentoContainer }>
          <Text>Acompanhar agendamento</Text>
        </View>
      </ScrollView>
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
    paddingLeft: '5%',
    paddingRight: '5%',
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
  acompanharAgendamentoContainer: {
    textAlign: 'center',
  },
  return: {
    left: '5%',
    top: '5%',
  },
  footer: {
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: '#99EBE9',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonFooter: {
    alignItems: 'center',
  },
});