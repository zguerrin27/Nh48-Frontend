import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  }
  const handleRemove = (uri) => {
    setFieldValue(name, values[name].filter(imageUri => imageUri !== uri));
  }

  return (
    <>
      <ImageInputList 
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage />
    </>
  );
}

export default FormImagePicker;

const styles = StyleSheet.create({

})