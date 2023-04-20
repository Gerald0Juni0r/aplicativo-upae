import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
  let openAjuda = () => {
    navigation.navigate("Ajuda")
  }
  let openPerfil = () => {
    navigation.navigate("Perfil")
  }
  let openNotification = () => {
    navigation.navigate("Notification")
  }
  
  let openAgendar = () => {
    navigation.navigate("AgendarConsultas")
  }
  let openAcompanharAgendamento = () => {
    navigation.navigate("AcompanharAgendamentos")
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
          name={ 'notifications-none' } 
          size={ 30 } 
          color="black"
          onPress={ openNotification }
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
            name={ 'help-circle-outline' } 
            size={ 42 } 
            color="black" 
            onPress={ openAjuda }
          />
          <Text>Ajuda</Text>
        </View>
        <View style={ styles.buttonFooter }>
          <MaterialCommunityIcons 
            name={ 'home-circle' } 
            size={ 42 } 
            color="black" 
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
    paddingVertical: '15%',
    backgroundColor: '#C9FBFA',
  },
  homeContainer: {
    alignItems: 'center',
  },
  sectionAgendar: {
    backgroundColor: '#0BB9B7',
    marginBottom: '10%',
    paddingVertical: '2%',
    paddingHorizontal: '12%',
    alignItems: 'center',
    borderRadius: '20%',
    // box-shadow: 0px 4px 4px 0px #00000040;
  },
  sectionAcompanhar: {
    backgroundColor: '#0BB9B7',
    marginBottom: '10%',
    paddingVertical: '2%',
    paddingHorizontal: '3.5%',
    alignItems: 'center',
    borderRadius: '20%',
  },
  sectionHistoricoConsultas: {
    backgroundColor: '#0BB9B7',
    paddingVertical: '2%',
    paddingHorizontal: '8%',
    alignItems: 'center',
    borderRadius: '20%',
  },
  sectionImage: {
    marginBottom: '2%',
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