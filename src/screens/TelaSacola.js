import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';

const TelaSacola = ({ pedidos, setPedidos }) => {
  // Função para calcular o total
  const calcularTotal = () => {
    return pedidos
      .reduce((total, item) => {
        const precoNumerico = parseFloat(item.preco.replace('R$', '').replace(',', '.')); // Converte "R$ 30,00" para 30.00
        return total + precoNumerico * (item.quantidade || 1);
      }, 0)
      .toFixed(2); // Formata para duas casas decimais
  };

  // Função para remover item
  const removerItem = (id) => {
    setPedidos(pedidos.filter((item) => item.id !== id));
    Alert.alert('Removido!', 'O item foi removido da sacola.');
  };

  // Função para fechar pedido
  const fecharPedido = () => {
    if (pedidos.length === 0) {
      Alert.alert('Sacola vazia', 'Adicione itens antes de fechar o pedido.');
      return;
    }

    Alert.alert(
      'Pedido Confirmado!',
      `Seu pedido no valor de R$ ${calcularTotal()} foi registrado com sucesso!`,
      [{ text: 'OK', onPress: () => setPedidos([]) }] // Limpa a sacola após a confirmação
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sacola de Pedidos</Text>

      {pedidos.length === 0 ? (
        <Text style={styles.vazio}>Sua sacola está vazia.</Text>
      ) : (
        <>
          <FlatList
            data={pedidos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.nome}>{item.nome} - {item.preco}</Text>
                <Text>Quantidade: {item.quantidade || 1}</Text>
                <Button title="Remover" onPress={() => removerItem(item.id)} />
              </View>
            )}
          />
          
          {/* Exibir o total da sacola */}
          <View style={styles.totalContainer}>
            <Text style={styles.totalTexto}>Total: R$ {calcularTotal()}</Text>
          </View>

          {/* Botão para fechar o pedido */}
          <Button title="Fechar Pedido" onPress={fecharPedido} color="#6200ea" />
        </>
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
  totalContainer: { marginTop: 20, padding: 16, backgroundColor: '#fff', borderRadius: 8, alignItems: 'center' },
  totalTexto: { fontSize: 20, fontWeight: 'bold', color: '#6200ea' },
});

export default TelaSacola;
