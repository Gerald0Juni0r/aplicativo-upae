import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

// Impotando as telas que estão na pasta 'Screens'
import Login from './Screens/Login.js';
import Cadastro from './Screens/Cadastro.js';
import Home from './Screens/Home.js';
import AgendarConsultas from './Screens/AgendarConsultas.js';
import AcompanharAgendamentos from './Screens/AcompanharAgendamentos.js';
import HistoricoConsultas from './Screens/HistoricoConsultas.js';
import Ajuda from './Screens/Ajuda.js';
import Perfil from './Screens/Perfil.js';
import Notification from './Screens/Notification.js';

let Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AgendarConsultas" component={AgendarConsultas} />
      <Stack.Screen name="AcompanharAgendamentos" component={AcompanharAgendamentos} />
      <Stack.Screen name="HistoricoConsultas" component={HistoricoConsultas} />
      <Stack.Screen name="Ajuda" component={Ajuda} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});