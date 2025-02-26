import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaInicial from './src/screens/TelaInicial';
import TelaCadastro from './src/screens/TelaCadastro';
import TelaCardapio from './src/screens/TelaCardapio';
import TelaSacola from './src/screens/TelaSacola';
import TelaPedidos from './src/screens/TelaPedidos';

const Tab = createBottomTabNavigator();

const App = () => {
  const [pedidos, setPedidos] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Início" // ✅ Agora o app inicia direto na Tela Inicial
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Início') iconName = 'home-outline';
            else if (route.name === 'Cadastro') iconName = 'person-add-outline';
            else if (route.name === 'Cardápio') iconName = 'restaurant-outline';
            else if (route.name === 'Sacola') iconName = 'cart-outline';
            else if (route.name === 'Pedidos') iconName = 'clipboard-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#D32F2F', // 🔴 Ícone ativo em vermelho vibrante
          tabBarInactiveTintColor: '#A9A9A9', // ⚪ Ícone inativo em cinza escuro
          tabBarStyle: { backgroundColor: '#fff' },
          headerShown: false, // Oculta cabeçalho superior
        })}
      >
        <Tab.Screen name="Início" component={TelaInicial} />
        <Tab.Screen name="Cadastro" component={TelaCadastro} />
        <Tab.Screen name="Cardápio">
          {(props) => <TelaCardapio {...props} setPedidos={setPedidos} />}
        </Tab.Screen>
        <Tab.Screen name="Sacola">
          {(props) => <TelaSacola {...props} pedidos={pedidos} setPedidos={setPedidos} />}
        </Tab.Screen>
        <Tab.Screen name="Pedidos">
          {(props) => <TelaPedidos {...props} pedidos={pedidos} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
