import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Alert } from 'react-native';
import { TextInput, Button, Paragraph } from 'react-native-paper';
import CountryPicker from './CountryPicker'; 
import styles from '../Styles/styles';
import { loginWithEmail, loginWithPhone } from '../Services/api'; 

const LoginScreen = ({ navigation }) => {
  const [loginMethod, setLoginMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+855'); 
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      let data;
      if (loginMethod === 'email') {
        data = await loginWithEmail(email, password);
      } else {
        if (!countryCode) {
          setError('Please select a country code.');
          return;
        }

        const cleanPhone = phone.replace(/\D/g, ''); 
        const fullPhoneNumber = `${countryCode}${cleanPhone}`; 

        data = await loginWithPhone(fullPhoneNumber, password); 
      }

      if (data && data.data && data.data.accessToken) {
        console.log('Login successful, token:', data.data.accessToken);
        navigation.navigate('UserProfile', { token: data.data.accessToken });
      } else {
        setError('Login failed: Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err.message);
      setError('Login failed: ' + err.message);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert("Forgot Password", "This feature is not implemented yet.");
  };

  const handleMethodChange = (method) => {
    setLoginMethod(method);
    setPassword(''); 
    if (method === 'email') {
      setPhone(''); 
    } else {
      setEmail(''); 
    }
  };

  const renderEmailInputs = () => (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        left={<TextInput.Icon name="email" />}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Ensure this is set to true
        left={<TextInput.Icon name="lock" />}
      />
    </View>
  );

  const renderPhoneInputs = () => (
    <View style={styles.inputView}>
      <CountryPicker onSelect={(country) => setCountryCode(country.code)} />
      <TextInput
        style={styles.input}
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        left={<TextInput.Icon name="phone" />}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        left={<TextInput.Icon name="lock" />}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.loginMethodContainer}>
          <Pressable
            style={[
              styles.methodButton,
              loginMethod === 'email' ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => handleMethodChange('email')}
          >
            <Text
              style={[
                styles.methodButtonText,
                loginMethod === 'email' ? styles.selectedButton : {},
              ]}
            >
              Email
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.methodButton,
              loginMethod === 'phone' ? styles.selectedButton : styles.unselectedButton,
            ]}
            onPress={() => handleMethodChange('phone')}
          >
            <Text
              style={[
                styles.methodButtonText,
                loginMethod === 'phone' ? styles.selectedButton : {},
              ]}
            >
              Phone
            </Text>
          </Pressable>
        </View>

        {loginMethod === 'email' ? renderEmailInputs() : renderPhoneInputs()}

        {error ? <Paragraph style={styles.loginError}>{error}</Paragraph> : null}

        <View style={styles.buttonView}>
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.forgetText}>Forgot password?</Text>
          </Pressable>
        </View>

        <View style={styles.buttonView}>
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
