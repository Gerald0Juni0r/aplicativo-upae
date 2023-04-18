import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
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

  let openAgendar = () => {
    navigation.navigate("AgendarConsultas")
  }
  let openAcompanharAgendamento = () => {
    navigation.navigate("AcompanharAgendamento")
  }
  let openHistorico = () => {
    navigation.navigate("HistoricoConsultas")
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Image
        style={ styles.logoHeader }
        source={ require('../assets/logoTypes/logoHeader.png') }
        />
        <MaterialIcons 
        name={ nameNotification } 
        size={ 30 } 
        color="black"
        onPress={ ativarNotification }
        />
      </View>
      <ScrollView style={ styles.scrollViewContainer }>
        <View style={ styles.homeContainer }>
          <TouchableOpacity onPress={ openAgendar }>
            <View style={ styles.sectionAgendar }>
              <Image
              style={ styles.sectionImage }
              source={ require('../assets/Icons/agendar.png') }
              />
              <Text>Agendar consulta</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ openAcompanharAgendamento }>
            <View style={ styles.sectionAcompanhar }>
              <Image
              style={ styles.sectionImage }
              source={ require('../assets/Icons/acompanharAgendamento.png') }
              />
              <Text>Acompanhar agendamento</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ openHistorico }>
            <View style={ styles.sectionHistoricoConsultas }>
              <Image
              style={ styles.sectionImage }
              source={ require('../assets/Icons/historicoConsultas.png') }
              />
              <Text>Histórico de consultas</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={ styles.footer }>
        <View style={ styles.buttonFooter }>
          <MaterialCommunityIcons 
            name={ nameAjuda } 
            size={ 42 } 
            color="black" 
            onPress={ ativarAjuda }
          />
          <Text>Ajuda</Text>
        </View>
        <View style={ styles.buttonFooter }>
          <MaterialCommunityIcons 
            name={ nameHome } 
            size={ 42 } 
            color="black" 
            onPress={ ativarHome }
          />
          <Text>Home</Text>
        </View>
        <View style={ styles.buttonFooter }>
          <Ionicons 
            name={ namePerfil } 
            size={ 40 }
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
    paddingTop: '15%',
    paddingBottom: '15%',
    backgroundColor: '#C9FBFA',
  },
  homeContainer: {
    alignItems: 'center',
  },
  sectionAgendar: {
    backgroundColor: '#0BB9B7',
    marginBottom: '10%',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '12%',
    paddingRight: '12%',
    alignItems: 'center',
    borderRadius: '20%',
    // box-shadow: 0px 4px 4px 0px #00000040;
  },
  sectionAcompanhar: {
    backgroundColor: '#0BB9B7',
    marginBottom: '10%',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '3.5%',
    paddingRight: '3.5%',
    alignItems: 'center',
    borderRadius: '20%',
  },
  sectionHistoricoConsultas: {
    backgroundColor: '#0BB9B7',
    paddingTop: '2%',
    paddingBottom: '2%',
    paddingLeft: '8%',
    paddingRight: '8%',
    alignItems: 'center',
    borderRadius: '20%',
  },
  sectionImage: {
    marginBottom: '2%',
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