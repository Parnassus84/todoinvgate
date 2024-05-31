import * as yup from 'yup';

const TEXT_FIELD_REQUIRED_ERROR = 'El campo es requerido.';
const TEXT_MIN_3_LENGTH = 'Campo debe tener al menos 3 carácteres';

export const formSchema = yup.object().shape({
  name: yup.string().trim().min(3, TEXT_MIN_3_LENGTH).required(TEXT_FIELD_REQUIRED_ERROR),
  
});