import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, Image, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
    let openHome = () => {
        navigation.navigate("Home")
    }
    let openNotification = () => {
        navigation.navigate("Notification")
    }
    let openAjuda = () => {
        navigation.navigate("Ajuda")
    }
    let openLogin = () => {
        navigation.reset({
        index: 0,
        routes: [{ name:"Login" }],
        })
    }

    return (
        <View style={ styles.perfilContainer }>
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
            <View style={ styles.iconOnOff }>
                <FontAwesome5 
                    name="power-off" 
                    size={ 25 } 
                    color="black" 
                    onPress={ openLogin }
                />
                <Text>Sair</Text>
            </View>
            <View style={ styles.container }>
                <Ionicons 
                    name={ 'person-circle-outline' } 
                    size={ 75 }
                    color="black"
                />
                <View style={ styles.inputContainer }>
                    <Text style={ styles.textLogin }>
                    Nome completo
                    </Text>
                    <TextInput
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
                        Senha atual
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={ styles.inputLogin }
                        placeholder='********'
                        secureTextEntry
                        maxLength={ 8 }  
                    />
                    <Text style={ styles.textLogin }>
                        Nova senha
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={ styles.inputLogin }
                        placeholder='********'
                        secureTextEntry
                        maxLength={ 8 }  
                    />
                    <Text style={ styles.textLogin }>
                        Repetir a nova senha
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={ styles.inputLogin }
                        placeholder='********'
                        secureTextEntry
                        maxLength={ 8 }  
                    />
                </View>
                <View style={ styles.buttonEntrarContainer }>
                    <Button 
                        title="Salvar" 
                        color={ 'black' }
                        style={ styles.buttonEntrar }
                        onPress={ () => Alert.alert('Seus dados foram atualizados!') }
                    />
                </View>
                <View style={ styles.direitosReservados }>
                    <Text> 
                        Todos os direitos reservados
                    </Text>
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
                        name={ 'person-circle' } 
                        size={ 40 }
                        color="black"
                    />
                    <Text>Perfil</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    perfilContainer: {
        flex: 1,
        backgroundColor: '#99EBE9',
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
    iconOnOff: {
        alignItems: 'flex-end',
        paddingTop: '2%',
        paddingRight: '6%',        
        backgroundColor: '#C9FBFA',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C9FBFA',
    },
    inputContainer: {
        textAlign: 'left',      
    },
    textLogin: {
        marginLeft: '2%',
        marginTop: '0.5%'
    },
    inputLogin: {
        paddingLeft: '2%',
        paddingRight: '30%',      
        paddingVertical: '2%',
        backgroundColor: '#99EBE9',
        borderRadius: 10,
    },
    buttonEntrarContainer: {
        backgroundColor: '#0BB9B7',
        borderRadius: 20,
        width: 180,
        marginTop: 6,
    },
    direitosReservados: {
        top: '4%'
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
  