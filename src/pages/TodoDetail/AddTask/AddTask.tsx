import React, { ComponentProps, FC } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';

interface Props extends ComponentProps<any> {
  addTask: (name: string) => void;
}

interface IForm {
  name: string;
}

export const AddTask: FC<Props> = ({ addTask, ...restProps }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const watchValue = watch();

  const onSubmit = ({ name }: IForm) => {
    addTask(name);
    setValue('name', '');
  };

  return (
    <div {...restProps}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" data-test="formAddtask">
        <TextField
          {...register('name')}          
          label="Agrega una tarea"
          error={!!watchValue.name && !!errors.name}
          helperText={errors.name?.message}
          size="small"
          fullWidth
        />
      </form>
    </div>
  );
};
