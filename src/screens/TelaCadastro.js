import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const cadastrar = () => {
    if (!nome || !telefone || !email || !endereco) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    if (!validarEmail(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return;
    }
    Alert.alert('Sucesso', 'Cadastro realizado!');
  };

  const limparCampos = () => {
    setNome('');
    setTelefone('');
    setEmail('');
    setEndereco('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro de Cliente</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInputMask
        style={styles.input}
        type={'cel-phone'}
        options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      {/* Botão Cadastrar */}
      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Botão Limpar Campos */}
      <TouchableOpacity style={[styles.botao, styles.botaoSecundario]} onPress={limparCampos}>
        <Text style={styles.textoBotao}>Limpar Campos</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  botao: {
    backgroundColor: '#D32F2F', // 🔴 Vermelho vibrante
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoSecundario: {
    backgroundColor: '#A9A9A9', // ⚫ Cinza para "Limpar Campos"
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaCadastro;
