import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Form from '../components/forms/Form';
import Screen from '../components/Screen';
import FormField from '../components/forms/FormField';
import SubmitButton from '../components/forms/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function LoginScreenFormik(props) {
  return (
    <Screen style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/Logo.png')}
      />
      <Form
        initialValues={{email: '', password: ''}}
        onSubmit={(values)=> console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

export default LoginScreenFormik;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
})