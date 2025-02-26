import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo do Restaurante */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.titulo}>Bem-vindo ao Restaurante Unipac!</Text>
      

      {/* Botão para Cadastrar Cliente */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
        <Ionicons name="person-add-outline" size={30} color="#FFD700" />
        <Text style={styles.textoBotao}>Cadastrar Cliente</Text>
      </TouchableOpacity>

      {/* Botão para Fazer Pedido */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cardápio')}>
        <Ionicons name="restaurant-outline" size={30} color="#FFD700" />
        <Text style={styles.textoBotao}>Fazer Pedido</Text>
      </TouchableOpacity>

      {/* Botão para Ver Pedidos */}
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Pedidos')}>
        <Ionicons name="clipboard-outline" size={30} color="#FFD700" />
        <Text style={styles.textoBotao}>Ver Pedidos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Fundo branco
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D32F2F', // 🔴 Vermelho vibrante
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  textoBotao: {
    color: '#FFD700', // 🟡 Amarelo ouro
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default TelaInicial;
