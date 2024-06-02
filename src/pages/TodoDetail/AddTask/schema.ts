import * as yup from 'yup';

const TEXT_FIELD_REQUIRED_ERROR = 'El campo es requerido.';
const TEXT_MIN_3_LENGTH = 'El campo debe tener al menos 3 caracteres';

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(3, TEXT_MIN_3_LENGTH)
    .required(TEXT_FIELD_REQUIRED_ERROR),
});
