import React from 'react'
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import Screen from '../components/Screen';
import FormImagePicker from '../components/forms/FormImagePicker';
import Form from '../components/forms/Form';
import FormField from '../components/forms/FormField';
import SubmitButton from '../components/forms/SubmitButton';
import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});


function HikeEditScreen(props) {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

export default HikeEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});