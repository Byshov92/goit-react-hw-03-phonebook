import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
    width: 400px;
    padding: 8px;
    border: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    /* gap: 12px; */
`;

export const FormField = styled.label`
    display: flex;
    max-width: 300px;
    flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
    color: red;
`;
export const Button = styled.button`
    width: 100px;
    border-radius: 5px;
    margin-top: 10px;
    &:hover,
    &:focus {
    background-color: rgb(216, 93, 65);}
`;