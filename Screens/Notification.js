import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
    let openHome = () => {
        navigation.navigate("Home")
    }
    let openPerfil = () => {
        navigation.navigate("Perfil")
    }
    let openAjuda = () => {
        navigation.navigate("Ajuda")
    }

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Image
        style={ styles.logoHeader }
        source={ require('../assets/logoTypes/logoHeader.png') }
        />
        <MaterialIcons 
        name={ 'notifications' } 
        size={ 30 } 
        color="black"
        />
      </View>
      <ScrollView style={ styles.scrollViewContainer }>
        <View style={ styles.notificationContainer }>
          <Image source={ require('../assets/Icons/iconAlertaVermelho.png') }/>
          <View>    
            <Text style={ styles.notificationText }>Sua consulta com Dr. Geraldo, oftalmologista, é hoje às 13h00.</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={ styles.notificationContainer }>
          <Image source={ require('../assets/Icons/iconAlertaPreto.png') }/>
          <View>
            <Text style={ styles.notificationText }>Sua consulta com Dr. Geraldo, oftalmologista, é amanhã às 13h00.</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name="trash-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={ styles.notificationContainer }>
          <Image source={ require('../assets/Icons/iconAlertaPreto.png') }/>
          <View>
            <Text style={ styles.notificationText }>Sua consulta com o Dr. Geraldo, oftalmologista, foi agendada para o dia 20/04/2023 às 13h00.</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome name="trash-o" size={24} color="black" />
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
    paddingVertical: '15%',
    backgroundColor: '#C9FBFA',
  },
  notificationContainer: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    borderRadius: '5%',
    marginBottom: '3%',
    marginHorizontal: '5%',
    paddingLeft: '5%',
    paddingRight: '20%',
    backgroundColor: '#99EBE9',
  },
  notificationText: {
    textAlign: 'justify',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
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