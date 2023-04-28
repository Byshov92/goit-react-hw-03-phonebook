import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Form, FormField, ErrorMessage, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Enter contact name'),
    number: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Enter telephone number'),
});

const initialValues = {
    name: '',
    number: '',
};

export const ContactForm = ({onSubmit}) => {
    const handleSubmit = (values, {resetForm} ) => {
    onSubmit(values);
    resetForm(); 
    };
    
    return (
    <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
        handleSubmit={(values, actions) => {
        onSubmit({
            ...values,
            id: nanoid(),
        });
            actions.resetForm();
        }}
        >
        <Form>
            <FormField>
            Name
                <Field name="name" />
                <ErrorMessage name="name" component="span" />
            </FormField>
            <FormField>
            Number
                <Field name="number" />
                <ErrorMessage name="number" component="span" />
            </FormField>
        <Button type="submit">Add contact</Button>
        </Form>
    </Formik>
    );
};
Form.propTypes ={
    onSubmit: PropTypes.func.isRequired,
}
