import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de login
    console.log('Login:', email, password);
  };

  const handleGoogleLogin = () => {
    // Aqui você pode adicionar a lógica de login com Google
    console.log('Login com Google');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Floresta Sagrada</Text>
        <Text style={styles.subtitle}>Conecte-se com a natureza</Text>
        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#666"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerLink}>
          <Text style={styles.registerText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity 
          style={styles.googleButton} 
          onPress={handleGoogleLogin}
          activeOpacity={0.6}
        >
          <Text style={styles.googleButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 300,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1B5E20',
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  dividerText: {
    color: '#fff',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 300,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#dadce0',
  },
  googleButtonText: {
    color: '#3c4043',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default HomeScreen; 