import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function FormField({ name, ...otherProps }) {
  const  { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput 
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)} //formik handlechange
        {...otherProps}
        // placeholder="email"
        // textContentType="emailAddress"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;