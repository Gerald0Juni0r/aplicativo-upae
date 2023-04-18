import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
  let openHome = () => {
    navigation.navigate("Home")
  }
  let openNotification = () => {
    navigation.navigate("Notification")
  }
  let openPerfil = () => {
    navigation.navigate("Perfil")
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
        <View style={ styles.helpContainer }>
          <Text>Ajuda</Text>
        </View>
      </ScrollView>
      <View style={ styles.footer }>
        <View style={ styles.buttonFooter }>
          <MaterialCommunityIcons 
            name={ 'help-circle' } 
            size={ 42 } 
            color="black"
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
    paddingTop: '15%',
    paddingBottom: '15%',
    backgroundColor: '#C9FBFA',
  },
  helpContainer: {
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