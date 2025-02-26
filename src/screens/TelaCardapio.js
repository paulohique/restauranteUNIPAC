import React from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, Alert, ScrollView } from 'react-native';

// Importando imagens corretamente
const pizzaImage = require('../../assets/pizza.png');
const hamburguerImage = require('../../assets/burger.png');
const sushiImage = require('../../assets/sushi.jpeg');
const lasanhaImage = require('../../assets/Lasanha.jpg');
const tacosImage = require('../../assets/tacos.png');
const saladaImage = require('../../assets/salada.jpeg');

const cardapio = [
  { 
    id: '1', 
    nome: 'Pizza Margherita', 
    descricao: 'Deliciosa pizza com molho de tomate, mussarela de búfala e manjericão fresco.', 
    preco: 'R$ 30,00', 
    imagem: pizzaImage 
  },
  { 
    id: '2', 
    nome: 'Hambúrguer Artesanal', 
    descricao: 'Hambúrguer de carne 100% angus, queijo cheddar, alface, tomate e molho especial.', 
    preco: 'R$ 25,00', 
    imagem: hamburguerImage 
  },
  { 
    id: '3', 
    nome: 'Sushi Variado', 
    descricao: 'Seleção especial de sushis variados, incluindo nigiris, uramakis e sashimis.', 
    preco: 'R$ 50,00', 
    imagem: sushiImage 
  },
  { 
    id: '4', 
    nome: 'Lasanha', 
    descricao: 'Lasanha feita com camadas de massa fresca, molho bolonhesa e queijo gratinado.', 
    preco: 'R$ 40,00', 
    imagem: lasanhaImage 
  },
  { 
    id: '5', 
    nome: 'Tacos Mexicanos', 
    descricao: 'Três tacos recheados com carne temperada, guacamole, sour cream e queijo.', 
    preco: 'R$ 35,00', 
    imagem: tacosImage 
  },
  { 
    id: '6', 
    nome: 'Salada Caesar', 
    descricao: 'Clássica salada Caesar com alface romana, frango grelhado, croutons e molho especial.', 
    preco: 'R$ 20,00', 
    imagem: saladaImage 
  },
];

const TelaCardapio = ({ setPedidos }) => {
  const adicionarPedido = (item) => {
    setPedidos((prevPedidos) => [...prevPedidos, { ...item, quantidade: 1 }]);
    Alert.alert('Adicionado!', `${item.nome} foi adicionado à sacola.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <Button title="Adicionar à Sacola" onPress={() => adicionarPedido(item)} />
          </View>
        )}
        scrollEnabled={false} // Desativamos o scroll do FlatList para não conflitar com ScrollView
        keyboardShouldPersistTaps="handled" // Permite que o teclado feche ao tocar fora
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  item: { marginBottom: 16, padding: 16, backgroundColor: '#fff', borderRadius: 8, elevation: 3 },
  imagem: { width: '100%', height: 150, borderRadius: 8, marginBottom: 8 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  descricao: { fontSize: 14, color: '#666', marginBottom: 8 },
  preco: { fontSize: 16, color: '#888', marginBottom: 8 },
});

export default TelaCardapio;
