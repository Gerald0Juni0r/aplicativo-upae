import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image, FlatList } from 'react-native';

// Icones
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  let [nameNotification, setNameNotification] = useState('notifications-none')
  let [nameAjuda, setNameAjuda] = useState('help-circle-outline')
  let [nameHome, setNameHome] = useState('home-circle')
  let [namePerfil, setNamePerfil] = useState('person-circle-outline')

  let ativarNotification = () => {
    setNameNotification('notifications')
    setNameAjuda('help-circle-outline')
    setNameHome('home-circle-outline')
    setNamePerfil('person-circle-outline')
  }
  let ativarAjuda = () => {
    setNameNotification('notifications-none')
    setNameAjuda('help-circle')
    setNameHome('home-circle-outline')
    setNamePerfil('person-circle-outline')
  }
  let ativarHome = () => {
    setNameNotification('notifications-none')
    setNameAjuda('help-circle-outline')
    setNameHome('home-circle')
    setNamePerfil('person-circle-outline')
  }
  let ativarPerfil = () => {
    setNameNotification('notifications-none')
    setNameAjuda('help-circle-outline')
    setNameHome('home-circle-outline')
    setNamePerfil('person-circle')
  }

  let [consultas, setConsultas] = useState([
    { nomeMedico: 'Dr. Geraldo Nunes', especialidade: 'Cardiologista', dataConsulta: '04/04/2023', key: 1 },
    { nomeMedico: 'Dra. Ana Maria', especialidade: 'Endocrinologista', dataConsulta: '01/03/2023', key: 2 },
    { nomeMedico: 'Dr. Jhonatas Neto', especialidade: 'Urologista', dataConsulta: '12/01/2023', key: 3 },
    { nomeMedico: 'Dr. Ronaldo Moura', especialidade: 'Cardiologista', dataConsulta: '06/12/2022', key: 4 }, 
  ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        style={styles.logoHeader}
        source={require('./assets/logoTypes/logoHeader.png')}
        />
        <MaterialIcons 
        name={ nameNotification } 
        size={30} 
        color="black"
        onPress={ ativarNotification }
        />
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.homeContainer}>
          <TouchableOpacity>
              <Image
              style={styles.return}
              source={require('./assets/Icons/return.png')}
              />
          </TouchableOpacity>
          <View>
            <View style={styles.classificacaoTable}>
              <Text>Médico</Text>
              <Text>Especialidade</Text>
              <Text>Data da consulta</Text>
            </View>
            <FlatList
              numColumns={1}
              keyExtractor={(item) => item.key}
              data = {consultas}
              renderItem={({ item }) => (
                <Text style={styles.dadosTable}> {item.nomeMedico} | {item.especialidade} | {item.dataConsulta} </Text>
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.buttonFooter}>
          <MaterialCommunityIcons 
            name={ nameAjuda } 
            size={42} 
            color="black" 
            onPress={ ativarAjuda }
          />
          <Text>Ajuda</Text>
        </View>
        <View style={styles.buttonFooter}>
          <MaterialCommunityIcons 
            name={ nameHome } 
            size={42} 
            color="black" 
            onPress={ ativarHome }
          />
          <Text>Home</Text>
        </View>
        <View style={styles.buttonFooter}>
          <Ionicons 
            name={ namePerfil } 
            size={40}
            color="black"
            onPress={ ativarPerfil }
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
  return: {
    left: '5%',
    top: '5%',
  },
  classificacaoTable: {
    backgroundColor: '#0BB9B7',
    marginTop: '5%',
    marginRight: '5%',
    marginLeft: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: '20%',
    display: 'flex',
  },
  dadosTable: {
    backgroundColor: '#99EBE9',
    marginTop: '5%',
    marginRight: '5%',
    marginLeft: '5%',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '2%',
    paddingRight: '2%',
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