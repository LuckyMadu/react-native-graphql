/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
import {Switch} from 'react-native';

const FieldWrapper = ({children, label, formikProps, formikKey}) => (
  <View style={{marginBottom: 20}}>
    <Text>{label}</Text>
    {children}
    <Text style={{color: 'red'}}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
);

const StyledInput = ({label, formikProps, formikKey, ...rest}) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }
  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  );
};

const StyledSwitch = ({label, formikProps, formikKey, ...rest}) => {
  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <Switch
        value={formikProps.values[formikKey]}
        onValueChange={value => formikProps.setFieldValue(formikKey, value)}
        {...rest}
      />
    </FieldWrapper>
  );
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(2).max(10),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(2, 'Seems Short')
    .max(10, 'Try shorter password'),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .min(2, 'Seems Short')
    .max(10, 'Try shorter password')
    .test('password-match', 'Password must match', function (value) {
      return this.parent.password === value;
    }),
  agreeTerms: yup
    .boolean()
    .label('Terms')
    .test('is-true', 'Must agree to terms', value => value === true),
});

export const Main = () => {
  return (
    <SafeAreaView style={{margin: 20}}>
      <Text style={{marginBottom: 50}}>Home</Text>

      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          agreeTerms: false,
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values));

          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}>
        {formikProps => (
          <>
            <StyledInput
              label="Name"
              formikProps={formikProps}
              formikKey="name"
              placeholder="Name"
              autofocus
            />
            <StyledInput
              label="Email"
              formikProps={formikProps}
              formikKey="email"
              placeholder="example@gmail.com"
            />
            <StyledInput
              label="Password"
              formikProps={formikProps}
              formikKey="password"
              placeholder="password"
              secureTextEntry
            />

            <StyledInput
              label="Confirm Password"
              formikProps={formikProps}
              formikKey="confirmPassword"
              placeholder="confrim password"
              secureTextEntry
            />

            <StyledSwitch
              label="Agree to terms"
              formikProps={formikProps}
              formikKey="agreeTerms"
            />

            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button title="Submit" onPress={formikProps.handleSubmit} />
            )}
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};
