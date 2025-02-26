import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TelaPedidos = ({ pedidos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Últimos Pedidos</Text>
      {pedidos.length === 0 ? (
        <Text style={styles.vazio}>Você ainda não fez nenhum pedido.</Text>
      ) : (
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nome}>{item.nome} - {item.preco}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  vazio: { textAlign: 'center', fontSize: 16, marginTop: 20 },
  item: { padding: 16, backgroundColor: '#fff', borderRadius: 8, marginBottom: 10, elevation: 3 },
  nome: { fontSize: 18, fontWeight: 'bold' },
});

export default TelaPedidos;
